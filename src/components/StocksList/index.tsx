import StocksListItem from "../StocksListItem";
import { StocksProps } from "../../../types";

export default function StocksList({ stocks }: StocksProps) {
  return (
    <>
      <ul>
        <StocksListItem stocks={stocks}></StocksListItem>
      </ul>
    </>
  );
}
