import useSWR from "swr";
import StocksList from "../components/StocksList";
import { SortParamType, Stock } from "../../types";
import SortDropdown from "../components/SortDropdown";
import { useEffect, useState } from "react";
import sortStocksList from "../utils/SortUtils";
import useSWRMutation from "swr/mutation";

const currentUsername = "icke";

// const url: string = "test";

//
//
//

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

  //! @patchrequest
  const { trigger, isMutating } = useSWRMutation(
    // `/api/jokes/${id}`,
    `/api/demostocks`,
    sendRequest
  );
  //
  //
  //! @patchrequest
  // TS: typified: async function sendRequest(url: string, { arg }) {
  async function sendRequest(url: string, { arg }: { arg: object }) {
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

  if (!stocks) return "Fetching stocks...";
  if (isLoading) return "Loading...";
  if (isMutating) return "Submitting your changes...";

  function handleSort(event: React.FormEvent) {
    const sortOption = event.target as HTMLSelectElement;
    const sortOptionValues = sortOption.value.split("-");
    setSortParam({
      sortBy: sortOptionValues[0] as "Symbol", // TS: Yair
      sortDirection: sortOptionValues[1] as "ascending", // TS: Yair
    });
  }

  //! @patchrequest
  async function handleToggleFavorite(
    // event: React.MouseEvent<HTMLButtonElement>
    stockId: string
    // userId: string,
    // fieldName: string
  ): Promise<void> {
    // console.log(id);

    const favoriteData = {
      // _id: stockId,
      Favorites: ["duso"],
      // [fieldName]: userId,
      // zzzTest: "yadayada",
    };
    console.log(favoriteData);

    // await trigger(id);
    await trigger(favoriteData);
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
