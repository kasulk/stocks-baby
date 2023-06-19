import StocksListItem from "../StocksListItem";

export default function StocksList({ stocksData }) {
  return (
    <>
      <ul>
        <StocksListItem stocksData={stocksData}></StocksListItem>
      </ul>
    </>
  );
}
