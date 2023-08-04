import useSWRInfinite, { SWRInfiniteKeyLoader } from "swr/infinite";

export default function usePagination<T>(url: string) {
  // export default function usePagination(url: string) {
  const ITEMS_PER_PAGE = 12;

  // const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData) => {
  function getKey(pageIndex: number, previousPageData: T[]) {
    pageIndex++;
    // console.log(pageIndex);

    if (previousPageData && !previousPageData.length) return null;
    return `${url}?page=${pageIndex}&limit=${ITEMS_PER_PAGE}`;
  }
  const {
    data: stocks,
    error,
    isLoading,
    size,
    setSize,
    mutate,
  } = useSWRInfinite(getKey);

  // const paginatedData: T[] = stocks?.flat();
  const paginatedData: T[] = stocks ? stocks.flat() : [];
  // console.log("paginatedData :", paginatedData);

  const isLoadingMore =
    isLoading ||
    (size > 0 && stocks && typeof stocks[size - 1] === "undefined");

  const isEmpty = stocks?.[0]?.length === 0;

  const isReachingEnd =
    isEmpty || (stocks && stocks[stocks.length - 1]?.length < ITEMS_PER_PAGE);

  return {
    paginatedData,
    // stocks,
    isReachingEnd,
    isLoadingMore,
    size,
    setSize,
    error,
    mutate,
  };
}
