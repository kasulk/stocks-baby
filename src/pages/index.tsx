import useSWR from "swr";
import StocksList from "../components/StocksList";
import { SortParamType, Stock } from "../../types";
import SortDropdown from "../components/SortDropdown";
import { useEffect, useState } from "react";
import sortStocksList from "../utils/SortUtils";

const currentUsername = "icke";

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

  if (!stocks) return "Fetching stocks...";
  if (isLoading) return "Loading...";

  function handleSort(event: React.FormEvent) {
    const sortOption = event.target as HTMLSelectElement;
    const sortOptionValues = sortOption.value.split("-");
    setSortParam({
      sortBy: sortOptionValues[0] as "Symbol", // TS: Yair
      sortDirection: sortOptionValues[1] as "ascending", // TS: Yair
    });
  }

  // onclick:
  // change classes of button/icon
  // add/remove current user id in db
  function handleToggleFavorite(
    // event: React.MouseEvent<HTMLButtonElement>
    id: string
  ): void {
    console.log(id);
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
