import { Stock, SortByType, SortDirectionType } from "../../types";

export default function sortStocksList(
  stocks: Stock[],
  sortBy: SortByType,
  sortDirection: SortDirectionType
): void {
  // const sorter = (a: StockType, b: StockType) => {
  function sorter(a: Stock, b: Stock): number {
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
  }
  stocks.sort(sorter);
}
