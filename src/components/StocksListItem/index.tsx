import { Stock } from "../../../types";
import StockCard from "../StockCard";

type Props = {
  stocks: Stock[];
  onToggleFavorite: (id: string, user: string) => void;
  isShowFavoriteStocks: boolean;
  currentUser?: string | null;
};

export default function StockListItem({
  stocks,
  onToggleFavorite,
  isShowFavoriteStocks,
  currentUser,
}: Props) {
  //
  // filter favorite stocks
  if (currentUser) {
    if (isShowFavoriteStocks) {
      stocks = stocks.filter((stock) => stock.Favorites?.includes(currentUser));
    }
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
            price={stock.quotesData?.price}
            priceLatestUpdate={stock.quotesData?.updatedAt}
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
