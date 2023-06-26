import StocksListItem from "../StocksListItem";
import { FuncProps, StocksProps } from "../../../types";

export default function StocksList({ stocks, onToggleFavorite }: StocksProps) {
  return (
    <>
      {/* <ul className="flex flex-wrap"> */}
      {/* <ul className="flex"> */}
      <ul>
        <StocksListItem
          stocks={stocks}
          onToggleFavorite={onToggleFavorite}
        ></StocksListItem>
      </ul>
    </>
  );
}
