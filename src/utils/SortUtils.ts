import { StockType, SortByType, SortDirectionType } from "../../types";

export default function sortStocksList(
  stocks: StockType[],
  sortBy: SortByType,
  sortDirection: SortDirectionType
) {
  // const sorter = (a: StockType, b: StockType) => {
  function sorter(a: StockType, b: StockType) {
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
