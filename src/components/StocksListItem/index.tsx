import { removeDoublesfromArray } from "@/utils/DataUtils";
import { Stock } from "../../../types";
import StockCard from "../StockCard";

type Props = {
  stocks: Stock[];
  onToggleFavorite: (id: string, user: string) => void;
  isShowFavoriteStocks: boolean;
  currentUser?: string | null;
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
      stock.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const foundStocksBySymbol = stocks.filter((stock) =>
      stock.ticker.toLowerCase().includes(searchTerm.toLowerCase())
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
            ticker={stock.ticker}
            name={stock.name}
            description={stock.description}
            exchange={stock.exchange}
            sector={stock.sector}
            industry={stock.industry}
            dividendPerShare={stock.dividendPerShare}
            dividendYield={stock.dividendYield}
            eps={stock.eps}
            eps15x={stock.eps15x}
            bookValue={stock.bookValue}
            fiftyTwoWeekHigh={stock.fiftyTwoWeekHigh}
            fiftyTwoWeekLow={stock.fiftyTwoWeekLow}
            analystTargetPrice={stock.analystTargetPrice}
            price={stock.quotesData.price}
            priceLatestUpdate={stock.quotesData.updatedAt}
            // bruchwert52Week={stock.bruchwert52Week}
            onToggleFavorite={onToggleFavorite}
            Favorites={stock.Favorites}
            currentUser={currentUser}
            logoURL={stock.logoData ? stock.logoData.logoURL : ""}
            updatedAt={stock.updatedAt}
          />
        </li>
      ))}
    </>
  );
}
