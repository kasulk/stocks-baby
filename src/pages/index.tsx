import useSWR from "swr";
import StocksList from "../components/StocksList";
import { SortParamType, StockType } from "../../types";
import SortDropdown from "../components/SortDropdown";
import { useState } from "react";
import sortStocksList from "../utils/SortUtils";
import addBruchwertPropertyToArrOfObjs from "@/utils/DataUtils";

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
  if (!stocks) return "Fetching stocks...";
  if (isLoading) return "Loading...";

  // console.log(stocks[1].DividendYield * 100);
  // console.log(stocks[1].EPS);
  // console.log(stocks[1].EPS * 15);

  // console.log("stocks before:", stocks);
  // obviously not necessary...
  // function convertNumberStringPropertiesToNumbers(arrOfObjects: StockType[]) {
  //   arrOfObjects.forEach((object) => {
  //     for (let key in object) {
  //       // if the value is a number, convert it into a number
  //       if (Number(object[key])) {
  //         object[key] = Number(object[key]);
  //       }
  //     }
  //   });
  // }
  // convertNumberStringPropertiesToNumbers(stocks);
  // console.log("stocks after:", stocks);

  function handleSort(event: React.FormEvent) {
    const sortOption = event.target as HTMLSelectElement;
    const sortOptionValues = sortOption.value.split("-");
    setSortParam({
      sortBy: sortOptionValues[0] as "Symbol", // TS: Yair
      sortDirection: sortOptionValues[1] as "ascending", // TS: Yair
    });
  }

  addBruchwertPropertyToArrOfObjs(stocks);
  // console.log(stocks);

  sortStocksList(stocks, sortParam.sortBy, sortParam.sortDirection);

  return (
    <>
      <SortDropdown onSort={handleSort} />
      <StocksList stocks={stocks}></StocksList>
    </>
  );
}
