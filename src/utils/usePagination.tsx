import useSWRInfinite, { SWRInfiniteKeyLoader } from "swr/infinite";

export default function usePagination<T>(url: string, searchQuery: string) {
  const ITEMS_PER_PAGE = 12;

  function getKey(pageIndex: number, previousPageData: T[]) {
    pageIndex++;

    if (previousPageData && !previousPageData.length) return null;
    if (searchQuery)
      return `${url}?page=${pageIndex}&limit=${ITEMS_PER_PAGE}&query=${searchQuery}`;

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
