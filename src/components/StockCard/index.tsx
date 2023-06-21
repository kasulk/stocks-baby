import { StockType } from "../../../types";

export default function StockCard({
  Symbol,
  Name,
  Exchange,
  Sector,
  Industry,
  DividendPerShare,
  DividendYield,
  EPS,
  BookValue,
  _52WeekHigh,
  _52WeekLow,
  AnalystTargetPrice,
  Price,
}: StockType) {
  //
  return (
    <article className="m-4 p-4 rounded-lg text-slate-300 bg-slate-600 hover:bg-slate-800 list-none">
      <p className="text-xs">
        <span>{Symbol}</span>:<span>{Exchange}</span>
      </p>
      <h1 className="font-bold text-xl">{Name}</h1>
      <div className="text-xs">
        <p>{Sector}</p>
        <p>{Industry}</p>
      </div>
      <p>
        <span>Dividend: </span>
        {DividendPerShare != "0" ? DividendPerShare : "-"}
      </p>
      <p>
        <span>Dividend %: </span>
        {DividendYield != "0" ? `${Number(DividendYield) * 100}%` : "-"}
      </p>
      <p>
        <span>EPS: </span>
        {EPS}
      </p>
      <p>
        <span>BookValue: </span>
        {BookValue}
      </p>
      <p>
        <span>52W Range: </span>
        {_52WeekLow} - {_52WeekHigh}
      </p>
      <p>
        <span>Analyst Target Price: </span>
        {AnalystTargetPrice}
      </p>
      <p>
        <span>Price: </span>
        {Price}
      </p>
    </article>
  );
}
