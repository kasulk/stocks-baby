import StocksListItem from "../StocksListItem";
import { Stock } from "../../../types";

type Props = {
  stocks: Stock[];
  onToggleFavorite: (id: string, user: string) => void;
  isShowFavorites: boolean;
  currentUser: string;
};

export default function StocksList({
  stocks,
  onToggleFavorite,
  isShowFavorites,
  currentUser,
}: Props) {
  return (
    <ul>
      <StocksListItem
        stocks={stocks}
        onToggleFavorite={onToggleFavorite}
        isShowFavorites={isShowFavorites}
        currentUser={currentUser}
      ></StocksListItem>
    </ul>
  );
}
