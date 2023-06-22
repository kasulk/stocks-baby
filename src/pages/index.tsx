import useSWR from "swr";
import StocksList from "../components/StocksList";
import { StockType } from "../../types";
import SortDropdown from "@/components/SortDropdown";
import { FormEvent, useState } from "react";
// import Image from "next/image";

export default function Home() {
  const [sortParam, setSortParam] = useState("");
  // move swr to stocklistitem?
  const { data } = useSWR("/api/demostocks", { fallbackData: [] });

  function handleSortSubmit(event: FormEvent<HTMLFormElement>) {
    const element = event.target as HTMLSelectElement;
    setSortParam(element.value);
    // console.log(sortParam);
  }

  return (
    <>
      <SortDropdown onSubmit={handleSortSubmit} />
      <StocksList stocks={data}></StocksList>
    </>
  );
}
