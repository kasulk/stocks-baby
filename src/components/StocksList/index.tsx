import StocksListItem from "../StocksListItem";
import { Stock } from "../../../types";

type Props = {
  stocks: Stock[];
  onToggleFavorite: (id: string, user: string) => void;
  isShowFavoriteStocks: boolean;
  currentUser?: string | null;
};

export default function StocksList({
  stocks,
  onToggleFavorite,
  isShowFavoriteStocks,
  currentUser,
}: Props) {
  return (
    <ul className="flex flex-wrap justify-center sm:px-12 lg:px-24">
      <StocksListItem
        stocks={stocks}
        onToggleFavorite={onToggleFavorite}
        isShowFavoriteStocks={isShowFavoriteStocks}
        currentUser={currentUser}
      ></StocksListItem>
    </ul>
  );
}
