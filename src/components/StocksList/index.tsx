import StocksListItem from "../StocksListItem";
import { Stock } from "../../../types";

type Props = {
  stocks: Stock[];
  onToggleFavorite: (id: string, user: string) => void;
  isShowFavoriteStocks: boolean;
  currentUser: string;
  searchTerm: string;
};

export default function StocksList({
  stocks,
  onToggleFavorite,
  isShowFavoriteStocks,
  currentUser,
  searchTerm,
}: Props) {
  return (
    <ul>
      <StocksListItem
        stocks={stocks}
        onToggleFavorite={onToggleFavorite}
        isShowFavoriteStocks={isShowFavoriteStocks}
        currentUser={currentUser}
        searchTerm={searchTerm}
      ></StocksListItem>
    </ul>
  );
}
