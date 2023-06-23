// export interface StockType {
//   _id?: string; // TS: if not set to optional, TS complains when passing the props to Card-Component...
//   ticker: string;
//   name: string;
//   exchange: string;
//   assetType: string;
//   price?: number;
// }

export interface StockType {
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
}

export interface StocksProps {
  stocks: StockType[];
}

// TS: Yair
export type SortParamType = {
  sortBy: "Name" | "Symbol";
  sortDirection: "ascending" | "descending";
};

export type SortType = "Symbol" | "Name";
