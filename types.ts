// export interface StockType {
//   _id?: string; // TS: if not set to optional, TS complains when passing the props to Card-Component...
//   ticker: string;
//   name: string;
//   exchange: string;
//   assetType: string;
//   price?: number;
// }

export type StockType = {
  _id?: string; // TS: if not set to optional, TS complains when passing the props to Card-Component...
  Symbol: string;
  Name: string;
  Exchange: string;
  Sector: string;
  Industry: string;
  DividendPerShare: string;
  DividendYield: string;
  EPS: string;
  BookValue: string;
  _52WeekHigh: string;
  _52WeekLow: string;
  AnalystTargetPrice: string;
  Price: string;
};

export type StocksProps = {
  stocks: StockType[];
};

// TS: Yair
export type SortByType = "Symbol" | "Name";

// TS: Yair
export type SortDirectionType = "ascending" | "descending";

// TS: Yair
export type SortParamType = {
  sortBy: SortByType;
  sortDirection: SortDirectionType;
};
