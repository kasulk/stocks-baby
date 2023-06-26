export type StockType = {
  _id?: string; // TS: if not set to optional, TS complains when passing the props to Card-Component...
  Symbol: string;
  Name: string;
  Exchange: string;
  Sector: string;
  Industry: string;
  DividendPerShare: string | number;
  DividendYield: string | number;
  EPS: number;
  EPSx15: number;
  BookValue: number; // | string
  _52WeekHigh: number;
  _52WeekLow: number;
  AnalystTargetPrice: string | number;
  Price: number;
  Bruchwert52Week?: number | string;
  // Bruchwert52Week: number | string;
  Favorites?: string[];
};

export type StocksProps = {
  stocks: StockType[];
  onToggleFavorite?: (event: React.MouseEvent) => void;
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

export type FuncProps = {
  onToggleFavorite: (event: React.MouseEvent) => void;
};
