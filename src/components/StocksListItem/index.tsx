import { removeDoublesfromArray } from "@/utils/DataUtils";
import { Stock } from "../../../types";
import StockCard from "../StockCard";

type Props = {
  stocks: Stock[];
  onToggleFavorite: (id: string, user: string) => void;
  isShowFavoriteStocks: boolean;
  currentUser?: string;
  searchTerm: string;
};

export default function StockListItem({
  stocks,
  onToggleFavorite,
  isShowFavoriteStocks,
  currentUser,
  searchTerm,
}: Props) {
  //

  // filter favorite stocks
  if (currentUser) {
    if (isShowFavoriteStocks) {
      stocks = stocks.filter((stock) => stock.Favorites?.includes(currentUser));
    }
  }

  // filter stocks with a name and/or ticker symbol that match the search term
  if (searchTerm) {
    const foundStocksByName = stocks.filter((stock) =>
      stock.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const foundStocksBySymbol = stocks.filter((stock) =>
      stock.Symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const mergedSearchResults = [...foundStocksByName, ...foundStocksBySymbol];

    stocks = removeDoublesfromArray(mergedSearchResults);
  }

  return (
    <>
      {stocks.map((stock) => (
        <li key={stock._id} className="list-none">
          <StockCard
            _id={stock._id}
            Symbol={stock.Symbol}
            Name={stock.Name}
            Description={stock.Description}
            Exchange={stock.Exchange}
            Sector={stock.Sector}
            Industry={stock.Industry}
            DividendPerShare={stock.DividendPerShare}
            DividendYield={stock.DividendYield}
            EPS={stock.EPS}
            EPSx15={stock.EPSx15}
            BookValue={stock.BookValue}
            _52WeekHigh={stock._52WeekHigh}
            _52WeekLow={stock._52WeekLow}
            AnalystTargetPrice={stock.AnalystTargetPrice}
            Price={stock.Price}
            Bruchwert52Week={stock.Bruchwert52Week}
            onToggleFavorite={onToggleFavorite}
            Favorites={stock.Favorites}
            currentUser={currentUser}
            LogoURL={stock.LogoURL}
          />
        </li>
      ))}
    </>
  );
}
