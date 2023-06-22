import useSWR from "swr";
import StocksList from "../components/StocksList";
import { StockType } from "../../types";
import SortDropdown from "@/components/SortDropdown";
import { FormEvent, useState } from "react";
// import Image from "next/image";

export default function Home() {
  // const [sortParam, setSortParam] = useState("ticker-ascending");
  // const [sortParam, setSortParam] = useState("");
  const [sortParam, setSortParam] = useState({
    sortBy: "",
    sortDirection: "",
  });

  // move swr to stocklistitem?
  const { data: stocks } = useSWR("/api/demostocks", { fallbackData: [] });

  function handleSortSubmit(event: FormEvent<HTMLFormElement>) {
    const element = event.target as HTMLSelectElement;
    const elementOptionValues = element.value.split("-");

    // console.log(elementOptionValues);

    // setSortParam(element.value);
    setSortParam({
      sortBy: elementOptionValues[0],
      sortDirection: elementOptionValues[1],
    });

    // console.log(sortParam);
  }

  // console.log(sortParam);

  // step: Make sort function dynamic, depending on chosen dropdown-value
  // step: e.g.: 'Symbol-ascending' => a.Symbol (take keyname and direction from dropdown-value)

  stocks.sort((a: StockType, b: StockType) => {
    if (sortParam.sortDirection === "ascending") {
      if (a.Symbol < b.Symbol) {
        return -1;
      }
      if (a.Symbol > b.Symbol) {
        return 1;
      }
    } else if (sortParam.sortDirection === "descending") {
      if (a.Symbol < b.Symbol) {
        return 1;
      }
      if (a.Symbol > b.Symbol) {
        return -1;
      }
    }
  });
  // }
  // if (sortParam.sortDirection === "ascending") {
  //   stocks.sort((a: StockType, b: StockType) => {
  //     if (a.Symbol < b.Symbol) {
  //       return -1;
  //     }
  //     if (a.Symbol > b.Symbol) {
  //       return 1;
  //     }
  //   });
  // } else if (sortParam.sortDirection === "descending") {
  //   stocks.sort((a: StockType, b: StockType) => {
  //     if (a.Symbol < b.Symbol) {
  //       return 1;
  //     }
  //     if (a.Symbol > b.Symbol) {
  //       return -1;
  //     }
  //   });
  // }
  // console.log("stocks:", stocks);
  // console.log("sortedStocks:", sortedStocks);

  return (
    <>
      <SortDropdown onSubmit={handleSortSubmit} />
      <StocksList stocks={stocks}></StocksList>
    </>
  );
}
