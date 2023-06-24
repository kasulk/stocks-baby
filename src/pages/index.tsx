import useSWR from "swr";
import StocksList from "../components/StocksList";
import { SortParamType, StockType } from "../../types";
import SortDropdown from "../components/SortDropdown";
import { useEffect, useState } from "react";
import sortStocksList from "../utils/SortUtils";
import {
  addBruchwertPropertyToArrOfObjs,
  convertNumberStringPropertiesToNumbers,
} from "@/utils/DataUtils";

export default function Home() {
  const [sortParam, setSortParam] = useState<SortParamType>({
    // TS: Yair
    sortBy: "Symbol",
    sortDirection: "ascending",
  });

  //? move swr to StockListItem?
  const { data: stocks, isLoading } = useSWR("/api/demostocks", {
    fallbackData: [],
  });

  useEffect(() => {
    const oldStocks = stocks;
    // ? runs every time the comp rerenders...
    // ? should only run one time after the data is fetched...
    convertNumberStringPropertiesToNumbers(stocks);
    addBruchwertPropertyToArrOfObjs(stocks);
    console.log(stocks);

    // cleanup
    return () => {
      // undo stocks manipulation by setting the old stocks values again
      stocks = oldStocks;
    };
  }, []);

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

  sortStocksList(stocks, sortParam.sortBy, sortParam.sortDirection);

  return (
    <>
      <SortDropdown onSort={handleSort} />
      <StocksList stocks={stocks}></StocksList>
    </>
  );
}
