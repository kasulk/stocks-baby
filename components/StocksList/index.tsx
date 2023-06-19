import StockListItem from "../StockListItem";

export default function StocksList({ stocksData }) {
  return (
    <>
      <ul>
        <StockListItem stocksData={stocksData}></StockListItem>
      </ul>
    </>
  );
}
