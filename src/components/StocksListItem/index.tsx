import { Stock } from "../../../types";
import StockCard from "../StockCard";

type Props = {
  stocks: Stock[];
  onToggleFavorite: (id: string, user: string) => void;
  isShowFavoriteStocks: boolean;
  currentUser: string;
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
  if (isShowFavoriteStocks) {
    stocks = stocks.filter((stock) => stock.Favorites?.includes(currentUser));
  }
  // filter stocks with a name and/or ticker symbol that match the search term
  if (searchTerm) {
    const filteredStocksByName = stocks.filter((stock) =>
      stock.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(
      "stocksbyname:",
      filteredStocksByName.map((e) => e.Symbol)
    );

    const filteredStocksBySymbol = stocks.filter((stock) =>
      stock.Symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(
      "stocksbysymbol:",
      filteredStocksBySymbol.map((e) => e.Symbol)
    );
    // remove doubles
    // stocks = filteredStocksByName.filter((stock) =>
    //   filteredStocksBySymbol.includes(stock)
    // );

    // stocks = filteredStocksByName;
    // stocks = [...filteredStocksByName, ...filteredStocksBySymbol];
    const mergedSearchResults = [
      ...filteredStocksByName,
      ...filteredStocksBySymbol,
    ];
    console.log(
      "merged Results:",
      mergedSearchResults.map((e) => e.Symbol)
    );

    stocks = removeDoublesfromArray(mergedSearchResults);
    console.log(
      "single Results:",
      stocks.map((e) => e.Symbol)
    );

    // if (filteredStocksByName.length === 0) {
    //   stocks = filteredStocksBySymbol;
    // } else if (filteredStocksBySymbol.length === 0) {
    //   stocks = filteredStocksByName;
    // } else {
    //   stocks = filteredStocksByName.filter((stock) =>
    //     filteredStocksBySymbol.includes(stock)
    //   );
    // }
  }
  function removeDoublesfromArray(arr: Stock[]): Stock[] {
    return [...new Set(arr)]; // Set object is ES6
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
