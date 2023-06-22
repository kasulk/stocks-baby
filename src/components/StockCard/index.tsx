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
    <article
      // shadow not working...
      className={`m-6 p-6 rounded-2xl shadow-md shadow-gray-500 text-slate-300 bg-slate-600 hover:bg-slate-800 hover:scale-[1.02]`}
    >
      <p className="text-xs">
        <span>{Symbol}</span>:<span>{Exchange}</span>
      </p>
      <h1 className="font-bold text-xl">{Name}</h1>
      <div className="text-xs">
        <p>{Sector}</p>
        <p>{Industry}</p>
      </div>
      <p>
        <span className="text-sm text-slate-400">Dividend: </span>
        <span>{DividendPerShare != "0" ? DividendPerShare : "-"}</span>
      </p>
      <p>
        <span className="text-sm text-slate-400">Dividend %: </span>
        <span>
          {DividendYield != "0" ? `${Number(DividendYield) * 100}%` : "-"}
        </span>
      </p>
      <p>
        <span className="text-sm text-slate-400">EPS: </span>
        <span>{EPS}</span>
      </p>
      <p>
        <span className="text-sm text-slate-400">BookValue: </span>
        <span>{BookValue}</span>
      </p>
      <p>
        <span className="text-sm text-slate-400">52W Range: </span>
        <span>
          {_52WeekLow} - {_52WeekHigh}
        </span>
      </p>
      <p>
        <span className="text-sm text-slate-400">Analyst Target Price: </span>
        <span>{AnalystTargetPrice}</span>
      </p>
      <p>
        <span className="text-sm text-slate-400">Price: </span>
        <span>{Price}</span>
      </p>
    </article>
  );
}
