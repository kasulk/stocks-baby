import useSWRInfinite, { SWRInfiniteKeyLoader } from "swr/infinite";

// export default function usePagination<T>(url: string) {
export default function usePagination(url: string) {
  const PAGE_SIZE = 12;

  const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData) => {
    pageIndex++;
    console.log(pageIndex);

    if (previousPageData && !previousPageData.length) return null;
    // return `/api/stocks?page=${pageIndex}&limit=${PAGE_SIZE}`;
    return `${url}?page=${pageIndex}&limit=${PAGE_SIZE}`;
  };
  const {
    data: stocks,
    error,
    isLoading,
    size,
    setSize,
    mutate,
  } = useSWRInfinite(getKey);

  // const flattenedStocks = stocks?.flat();
  // const flattenedStocks = stocks?.flatMap((page) => page);
  // console.log("flattenedStocks:", flattenedStocks);
  const paginatedStocks = stocks?.flat();
  console.log("paginatedStocks :", paginatedStocks);

  const isLoadingMore =
    isLoading ||
    (size > 0 && stocks && typeof stocks[size - 1] === "undefined");

  const isEmpty = stocks?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (stocks && stocks[stocks.length - 1]?.length < PAGE_SIZE);

  return {
    paginatedStocks,
    // stocks,
    isReachingEnd,
    isLoadingMore,
    size,
    setSize,
    error,
    mutate,
  };
}
