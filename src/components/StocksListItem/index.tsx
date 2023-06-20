import { StocksProps } from "../../../types";
import StockCard from "../StockCard";

export default function StockListItem({ stocks }: StocksProps) {
  return (
    <>
      {stocks.map((stock) => (
        <li
          key={stock._id}
          className="text-red-500 bg-slate-600 hover:bg-slate-800 list-none"
        >
          <StockCard
            // id={stock._id}
            ticker={stock.ticker}
            name={stock.name}
            exchange={stock.exchange}
            assetType={stock.assetType}
          />
        </li>
      ))}
    </>
  );
}
