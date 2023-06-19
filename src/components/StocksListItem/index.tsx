import StockCard from "../StockCard";
import { Stock } from "../StocksList";

// export default function StockListItem({ stocksData }) {
export default function StockListItem(props: Stock[]) {
  return (
    <>
      {/* {stocksData.map((stock) => ( */}
      {props.map((stock) => (
        <li
          key={stock._id}
          className="text-red-500 bg-slate-600 hover:bg-slate-800 list-none"
        >
          <StockCard
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
