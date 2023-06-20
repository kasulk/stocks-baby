export interface StockType {
  _id?: string; // TS: if not set to optional, TS complains when passing the props to Card-Component...
  ticker: string;
  name: string;
  exchange: string;
  assetType: string;
  price?: number;
}

export interface StocksProps {
  stocks: StockType[];
}
