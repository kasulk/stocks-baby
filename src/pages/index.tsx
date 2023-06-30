import useSWR from "swr";
import StocksList from "../components/StocksList";
import { SortParamType, Stock } from "../../types";
import SortDropdown from "../components/SortDropdown";
import ShowFavoriteStocksToggle from "@/components/ShowFavoriteStocksToggle";
import { Dispatch, SetStateAction, useState } from "react";
import sortStocksList from "../utils/SortUtils";
import useSWRMutation from "swr/mutation";
import Heart from "../../_ressources/heart.svg";
import SearchForm from "@/components/SearchForm";

// const currentUsername = "icke";
const currentUser = "icke";

export default function Home() {
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

  function handleSort(event: React.ChangeEvent<HTMLSelectElement>) {
    const sortOption = event.target;
    const sortOptionValues = sortOption.value.split("-");
    setSortParam({
      sortBy: sortOptionValues[0] as "Symbol", // TS: Yair
      sortDirection: sortOptionValues[1] as "ascending", // TS: Yair
    });
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
      // if the db mutation fails, rollback local changes
      rollbackOnError: true,
    });
  }

  sortStocksList(stocks, sortParam.sortBy, sortParam.sortDirection);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    // const searchTerm = event.target.value;
    console.log(event.target.value);
    setSearchTerm(event.target.value);

    // stocks = stocks?.filter((stock) => stock.Name.includes(search));
  }

  return (
    <>
      <div className="flex flex-col-reverse items-end md:flex-row md:justify-end md:items-center">
        <ShowFavoriteStocksToggle
          isShowFavoriteStocks={isShowFavoriteStocks}
          setIsShowFavoriteStocks={setIsShowFavoriteStocks}
        />
        <SortDropdown onSort={handleSort} />
      </div>
      <SearchForm onChange={handleSearch} />
      <StocksList
        stocks={stocks}
        onToggleFavorite={handleToggleFavorite}
        currentUser={currentUser}
        isShowFavoriteStocks={isShowFavoriteStocks}
        searchTerm={searchTerm}
      ></StocksList>
    </>
  );
}
