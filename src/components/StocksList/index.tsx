import StocksListItem from "../StocksListItem";
import { StocksProps } from "../../../types";

export default function StocksList({ stocks }: StocksProps) {
  return (
    <>
      {/* <ul className="flex flex-wrap"> */}
      {/* <ul className="flex"> */}
      <ul>
        <StocksListItem stocks={stocks}></StocksListItem>
      </ul>
    </>
  );
}
