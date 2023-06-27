import StocksListItem from "../StocksListItem";
import { Stock } from "../../../types";

// type Props = StockType & {
type Props = {
  stocks: Stock[];
  onToggleFavorite: (id: string) => void;
};

export default function StocksList({ stocks, onToggleFavorite }: Props) {
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
