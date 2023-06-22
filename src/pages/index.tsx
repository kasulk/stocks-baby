import useSWR from "swr";
import StocksList from "../components/StocksList";
import { StockType } from "../../types";
import SortDropdown from "@/components/SortDropdown";
import { FormEvent, useState } from "react";
// import Image from "next/image";

export default function Home() {
  // const [sortParam, setSortParam] = useState("ticker-ascending");
  const [sortParam, setSortParam] = useState("");
  // move swr to stocklistitem?
  const { data: stocks } = useSWR("/api/demostocks", { fallbackData: [] });

  function handleSortSubmit(event: FormEvent<HTMLFormElement>) {
    const element = event.target as HTMLSelectElement;
    setSortParam(element.value);
    // console.log(sortParam);
  }

  console.log(sortParam);

  const sortedStocks = stocks.slice().sort((a, b) => {
    // ascending
    if (a.Symbol < b.Symbol) {
      return -1;
    }
    if (a.Symbol > b.Symbol) {
      return 1;
    }
  });

  console.log("stocks:", stocks);
  console.log("sortedStocks:", sortedStocks);

  return (
    <>
      <SortDropdown onSubmit={handleSortSubmit} />
      <StocksList stocks={stocks}></StocksList>
    </>
  );
}
