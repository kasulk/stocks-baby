import useSWR, { useSWRConfig } from "swr";
import StocksList from "../components/StocksList";
import { SortParamType, Stock } from "../../types";
import SortDropdown from "../components/SortDropdown";
import { useEffect, useState } from "react";
import sortStocksList from "../utils/SortUtils";
import useSWRMutation from "swr/mutation";

// const currentUsername = "icke";

export default function Home() {
  const [sortParam, setSortParam] = useState<SortParamType>({
    // TS: Yair
    sortBy: "Symbol",
    sortDirection: "ascending",
  });

  //? move swr to StockListItem?
  const { data: stocks, isLoading } = useSWR<Stock[]>("/api/demostocks", {
    fallbackData: [],
  });

  // @patchrequest, step3
  const { trigger, isMutating } = useSWRMutation(
    `/api/demostocks`,
    sendRequestFavoriteToggle // sendRequest
  );
  // ? for optimistic update
  const { cache } = useSWRConfig();
  //
  // @patchrequest, step2
  async function sendRequestFavoriteToggle(
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
  // if (isMutating) return <h1>Submitting your changes...</h1>;

  function handleSort(event: React.FormEvent) {
    const sortOption = event.target as HTMLSelectElement;
    const sortOptionValues = sortOption.value.split("-");
    setSortParam({
      sortBy: sortOptionValues[0] as "Symbol", // TS: Yair
      sortDirection: sortOptionValues[1] as "ascending", // TS: Yair
    });
  }
  type FavoriteMutation = {
    id: string;
    Favorites: string;
  };
  function mutateFavoriteData(
    currentData: Stock[],
    mutation: FavoriteMutation
  ) {
    console.log(currentData);

    const stockToUpdate = currentData?.find(
      (stock) => stock._id === mutation.id
    );
    const mutatedStock = { ...stockToUpdate };
    if (mutatedStock.Favorites?.includes(mutation.Favorites)) {
      mutatedStock.Favorites = mutatedStock.Favorites.filter(
        (userId) => userId !== mutation.Favorites
      );
    } else {
      mutatedStock.Favorites = [
        ...(mutatedStock.Favorites as string[]),
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
    // ? for optimistic update
    // const cacheKey = "/api/demostocks";
    // const currentData = cache.get(cacheKey);
    // const currentArrayField = currentData?.Favorites || [];

    const favoriteData = {
      id: stockId,
      Favorites: userId,
    };

    // step: find stock to update
    const stockToUpdate = stocks?.filter((stock) => stock._id === stockId);
    // console.log(stockToUpdate);
    // console.log(stockToUpdate[0].Name);
    // console.log({ id: "test", name: "test" });

    // const optimisticUpdate = {
    //   _id: stockId,
    //   // Favorites: [...previousFavorites, userId], // Optimistisches Update des Arrays
    //   Favorites: [...currentArrayField, userId], // Optimistisches Update des Arrays
    // };
    // await trigger(favoriteData);
    //! try to make the update optimistic
    // step: if array.includes userId
    // step: filter userId out
    // step: replace oldArray with filtered array
    // step: if array.!includes userId -> add it
    //
    await trigger(
      favoriteData,
      {
        optimisticData: (currentData) => {
          return mutateFavoriteData(
            currentData as unknown as Stock[],
            favoriteData
          );
        },
      }
      // console.log(currentData);
    );
    //
    // console.log(cache);
    // const currentStocksArr = cache.get(cacheKey)?.data;
    // const currentStock = currentStocksArr.filter(
    //   (stock) => stock._id === stockId
    // );
    // console.log(cache.get(cacheKey)?.data);
    // console.log(cache.get(cacheKey)?.data[0]);
    // console.log("current:", currentStock[0].Favorites);
    // const currentStockFavoritesRemovedUser = currentStock[0].Favorites.filter(
    //   (user) => user !== userId
    // );
    // console.log("Favorites without user:", currentStockFavoritesRemovedUser);
  }

  sortStocksList(stocks, sortParam.sortBy, sortParam.sortDirection);

  return (
    <>
      <SortDropdown onSort={handleSort} />
      <StocksList
        stocks={stocks}
        onToggleFavorite={handleToggleFavorite}
      ></StocksList>
    </>
  );
}
