export type Stock = {
  _id: string; // TS: if not set to optional, TS complains when passing the props to Card-Component...
  Symbol: string;
  Name: string;
  Exchange: string;
  Sector: string;
  Industry: string;
  DividendPerShare: number;
  DividendYield: number;
  EPS: number;
  EPSx15: number;
  BookValue: number; // | string
  _52WeekHigh: number;
  _52WeekLow: number;
  AnalystTargetPrice: number;
  Price: number;
  Bruchwert52Week: number;
  Favorites?: string[];
  LogoURL: string;
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
