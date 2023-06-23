import useSWR from "swr";
import StocksList from "../components/StocksList";
import { SortParamType, StockType } from "../../types";
import SortDropdown from "../components/SortDropdown";
import { useState } from "react";
import sortStocksList from "../utils/SortUtils";

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
  console.log("stocks before:", stocks);

  function processStocks(stocks: StockType[]) {
    // return stocks.map((stock) => {
    stocks.forEach((stock) => {
      for (let key in stock) {
        // if the value is a number, convert it into a number
        if (Number(stock[key])) {
          stock[key] = Number(stock[key]);
        }
      }
    });
  }

  // processStocks(stocks);
  console.log("stocks after:", stocks);

  function handleSort(event: React.FormEvent) {
    const sortOption = event.target as HTMLSelectElement;
    const sortOptionValues = sortOption.value.split("-");
    setSortParam({
      sortBy: sortOptionValues[0] as "Symbol", // TS: Yair
      sortDirection: sortOptionValues[1] as "ascending", // TS: Yair
    });
  }

  sortStocksList(stocks, sortParam.sortBy, sortParam.sortDirection);

  return (
    <>
      <SortDropdown onSort={handleSort} />
      <StocksList stocks={stocks}></StocksList>
    </>
  );
}
