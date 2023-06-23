export type StockType = {
  _id?: string; // TS: if not set to optional, TS complains when passing the props to Card-Component...
  Symbol: string;
  Name: string;
  Exchange: string;
  Sector: string;
  Industry: string;
  DividendPerShare: string | number;
  DividendYield: string | number;
  EPS: string | number;
  BookValue: string | number;
  // _52WeekHigh: string | number;
  _52WeekHigh: number;
  // _52WeekLow: string | number;
  _52WeekLow: number;
  AnalystTargetPrice: string | number;
  // Price: string | number;
  Price: number;
  Bruchwert52Week?: number | string;
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

export type SortProps = {
  onSort: (event: React.FormEvent) => void;
};
