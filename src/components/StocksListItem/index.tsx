import { StocksProps } from "../../../types";
import StockCard from "../StockCard";

export default function StockListItem({ stocks }: StocksProps) {
  return (
    <>
      {stocks.map((stock) => (
        <li key={stock._id} className="list-none">
          <StockCard
            Symbol={stock.Symbol}
            Name={stock.Name}
            Exchange={stock.Exchange}
            Sector={stock.Sector}
            Industry={stock.Industry}
            DividendPerShare={stock.DividendPerShare}
            DividendYield={stock.DividendYield}
            EPS={stock.EPS}
            BookValue={stock.BookValue}
            _52WeekHigh={stock._52WeekHigh}
            _52WeekLow={stock._52WeekLow}
            AnalystTargetPrice={stock.AnalystTargetPrice}
            Price={stock.Price}
          />
        </li>
      ))}
    </>
  );
}
