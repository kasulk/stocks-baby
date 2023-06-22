import useSWR from "swr";
import StocksList from "../components/StocksList";
import { SortParamType, StockType } from "../../types";
import SortDropdown from "@/components/SortDropdown";
import { FormEvent, useState } from "react";
// import Image from "next/image";

export default function Home() {
  const [sortParam, setSortParam] = useState<SortParamType>({
    sortBy: "Symbol",
    sortDirection: "ascending",
  });

  //? move swr to stocklistitem?
  const { data: stocks } = useSWR("/api/demostocks", { fallbackData: [] });

  function handleSortSubmit(event: FormEvent<HTMLFormElement>) {
    const element = event.target as HTMLSelectElement;
    const elementOptionValues = element.value.split("-");

    setSortParam({
      sortBy: elementOptionValues[0] as "Symbol",
      sortDirection: elementOptionValues[1] as "ascending",
    });
  }

  //! doesn't work
  // function sortStocksList(
  //   a: StockType,
  //   b: StockType,
  //   sortBy: any,
  //   sortDirection: any
  // ) {
  //   // const sortBy = sortParam.sortBy;

  //   if (sortDirection === "ascending") {
  //     if (a[sortBy] < b[sortBy]) {
  //       return -1;
  //     }
  //     if (a[sortBy] > b[sortBy]) {
  //       return 1;
  //     }
  //   } else if (sortDirection === "descending") {
  //     if (a[sortBy] < b[sortBy]) {
  //       return 1;
  //     }
  //     if (a[sortBy] > b[sortBy]) {
  //       return -1;
  //     }
  //   }
  // }

  // step: Make sort function dynamic, depending on chosen dropdown-value
  // step: e.g.: 'Symbol-ascending' => a.Symbol (take keyname and direction from dropdown-value)

  // stocks.sort(sortStocksList);

  stocks.sort((a: StockType, b: StockType) => {
    // sortStocksList(a, b, sortParam.sortBy, sortParam.sortDirection); //! doesn't work

    const sortBy = sortParam.sortBy;
    const sortDirection = sortParam.sortDirection;

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
  });

  return (
    <>
      <SortDropdown onSubmit={handleSortSubmit} />
      <StocksList stocks={stocks}></StocksList>
    </>
  );
}
