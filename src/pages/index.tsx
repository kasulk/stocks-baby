import useSWR from "swr";
import StocksList from "../components/StocksList";
import { SortParamType, Stock } from "../../types";
import SortDropdown from "../components/SortDropdown";
import ShowFavoriteStocksToggle from "@/components/ShowFavoriteStocksToggle";
import { useEffect, useState } from "react";
import sortStocksList from "../utils/SortUtils";
import useSWRMutation from "swr/mutation";
import SearchForm from "@/components/SearchForm";
import LoginButton from "@/components/LoginButton";
import { useSession } from "next-auth/react";
import useLocalStorageState from "use-local-storage-state";
import DarkmodeToggle from "@/components/DarkmodeToggle";

export default function Home() {
  const { data: session } = useSession();
  const currentUser = session?.user.name;

  const [theme, setTheme] = useLocalStorageState<string | null>(
    "theme",
    { defaultValue: setThemeToUserSystemTheme() }
    // { defaultValue: null }
  );

  const [isShowFavoriteStocks, setIsShowFavoriteStocks] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortParam, setSortParam] = useState<SortParamType>({
    // TS: Yair
    sortBy: "Symbol",
    sortDirection: "ascending",
  });

  // useSWR only fetches data, useSWRMutation also mutates it
  const { data: stocks, isLoading } = useSWR<Stock[]>("/api/demostocks", {
    fallbackData: [],
  });

  // @patchrequest, step3
  const { trigger } = useSWRMutation(
    `/api/demostocks`,
    updateFavoriteStockToggle // sendRequest
  );

  // dark mode start
  function setThemeToUserSystemTheme() {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(prefers-color-scheme: dark").matches) {
        return "dark";
      }
      return "light";
    }
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  function handleThemeSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  // dark mode end

  // @patchrequest, step2
  async function updateFavoriteStockToggle(
    url: string,
    { arg }: { arg: object }
  ) {
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(arg),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await response.json();
    } else {
      console.error(`Error (Response not ok): ${response.status}`);
      console.error(response);
    }
  }

  if (!stocks) return <h1>Fetching stocks...</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  function handleSort(event: React.ChangeEvent<HTMLSelectElement>): void {
    const sortOption = event.target;
    const sortOptionValues = sortOption.value.split("-");
    setSortParam({
      sortBy: sortOptionValues[0] as "Symbol", // TS: Yair
      sortDirection: sortOptionValues[1] as "ascending", // TS: Yair
    });
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  type FavoriteMutation = {
    // TS: Yair
    id: string;
    Favorites: string;
  };

  function mutateFavoriteData( // Yair
    currentData: Stock[],
    mutation: FavoriteMutation
  ) {
    const stockToUpdate = currentData?.find(
      (stock) => stock._id === mutation.id
    );
    const mutatedStock = { ...stockToUpdate }; // copy stockToUpdate

    if (mutatedStock.Favorites?.includes(mutation.Favorites)) {
      mutatedStock.Favorites = mutatedStock.Favorites.filter(
        (userId) => userId !== mutation.Favorites
      );
    } else {
      mutatedStock.Favorites = [
        ...(mutatedStock.Favorites as string[]), // TS: Yair
        mutation.Favorites,
      ];
    }

    return currentData.map((stock) =>
      stock._id === mutatedStock._id ? mutatedStock : stock
    );
  }

  // @patchrequest, step1
  async function handleToggleFavorite(
    stockId: string,
    userId: string
  ): Promise<void> {
    //
    const favoriteData = {
      id: stockId,
      Favorites: userId,
    };

    await trigger(favoriteData, {
      // optimisticData updates UI instantly and mutates db (afterwards) in the background
      optimisticData: (currentData) => {
        return mutateFavoriteData(
          currentData as unknown as Stock[], // TS: Yair
          favoriteData
        );
      },
      rollbackOnError: true, // if db mutation fails, rollback local changes
    });
  }

  sortStocksList(stocks, sortParam.sortBy, sortParam.sortDirection);

  return (
    <>
      {/* <header className="fixed top-0 z-10 flex flex-col-reverse items-end w-full bg-accent-4 bg-opacity-90 p-6 md:flex-row md:justify-end md:items-center"> */}
      <header className="fixed top-0 z-10 flex flex-col w-full bg-accent-4 bg-opacity-90 p-4 pb-0">
        <div className="flex flex-wrap justify-center sm:justify-between items-center">
          {/* <div className="block sm:flex sm:flex-wrap justify-center sm:justify-between items-center"> */}
          <h1 className="font-serif font-black italic text-4xl sm:text-6xl text-accent-3 mr-4">
            Ursula
          </h1>
          <div className="flex items-center m-2 ml-4">
            <LoginButton />
            <DarkmodeToggle
              onClick={() => {
                handleThemeSwitch();
              }}
              theme={theme}
            />
          </div>
        </div>
        {/* <div className="flex flex-wrap-reverse justify-center items-center mt-2"> */}
        <div className="flex flex-col-reverse items-center sm:flex-row sm:flex-wrap-reverse sm:items-center sm:justify-center mt-2">
          <SortDropdown onSort={handleSort} />
          <SearchForm onChange={handleSearch} />
          {/* show favorites view button only when user is logged in */}
          {/* {session && ( */}
          {currentUser && (
            <ShowFavoriteStocksToggle
              isShowFavoriteStocks={isShowFavoriteStocks}
              setIsShowFavoriteStocks={setIsShowFavoriteStocks}
            />
          )}
        </div>
      </header>
      <main className="pb-20 pt-72 sm:pt-52 md:pt-40">
        <StocksList
          stocks={stocks}
          onToggleFavorite={handleToggleFavorite}
          currentUser={currentUser}
          isShowFavoriteStocks={isShowFavoriteStocks}
          searchTerm={searchTerm}
        ></StocksList>
      </main>
      <footer className="fixed bottom-0 z-10 w-full text-center p-6 bg-accent-4 bg-opacity-90">
        <span>Made with 🍕 in Berlin</span>
      </footer>
    </>
  );
}
