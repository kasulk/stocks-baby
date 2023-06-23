import useSWR from "swr";
import StocksList from "../components/StocksList";
import {
  SortParamType,
  StockType,
  SortDirectionType,
  SortByType,
} from "../../types";
import SortDropdown from "@/components/SortDropdown";
import { FormEvent, useState } from "react";
// import Image from "next/image";

export default function Home() {
  const [sortParam, setSortParam] = useState<SortParamType>({
    // TS: Yair
    sortBy: "Symbol",
    sortDirection: "ascending",
  });

  //? move swr to stocklistitem?
  const { data: stocks, isLoading } = useSWR("/api/demostocks", {
    fallbackData: [],
  });
  if (!stocks) return "Fetching stocks...";
  if (isLoading) return "Loading...";

  function handleSortSubmit(event: FormEvent<HTMLFormElement>) {
    const sortOption = event.target as HTMLSelectElement;
    const sortOptionValues = sortOption.value.split("-");

    setSortParam({
      sortBy: sortOptionValues[0] as "Symbol", // TS: Yair
      sortDirection: sortOptionValues[1] as "ascending", // TS: Yair
    });
  }

  function sortStocksList(
    stocks: StockType[],
    sortBy: SortByType,
    sortDirection: SortDirectionType
  ) {
    // const sorter = (a: StockType, b: StockType) => {
    function sorter(a: StockType, b: StockType) {
      if (sortDirection === "ascending") {
        if (a[sortBy] < b[sortBy]) {
          return -1;
        }
        if (a[sortBy] > b[sortBy]) {
          return 1;
        }
      } else if (sortDirection === "descending") {
        if (a[sortBy] < b[sortBy]) {
          return 1;
        }
        if (a[sortBy] > b[sortBy]) {
          return -1;
        }
      }
      return 0;
    }
    stocks.sort(sorter);
  }

  sortStocksList(stocks, sortParam.sortBy, sortParam.sortDirection);

  return (
    <>
      <SortDropdown onSubmit={handleSortSubmit} />
      <StocksList stocks={stocks}></StocksList>
    </>
  );
}
