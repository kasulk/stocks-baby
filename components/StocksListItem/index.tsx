import StockCard from "../StockCard";

export default function StockListItem({ stocksData }) {
  return (
    <>
      {stocksData.map((stock) => (
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
