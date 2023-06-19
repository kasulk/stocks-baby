import StocksListItem from "../StocksListItem";

export type Stock = {
  _id: string;
  ticker: string;
  name: string;
  exchange: string;
  assetType: string;
};

// export default function StocksList({ stocksData }: Stock[]) {
export default function StocksList(props: Stock[]) {
  return (
    <>
      <ul>
        <StocksListItem stocksData={stocksData}></StocksListItem>
      </ul>
    </>
  );
}
