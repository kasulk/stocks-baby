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
  const processedStocksData: (string | number)[] = [
    Symbol,
    Name,
    Exchange,
    Sector,
    Industry,
    Number(DividendPerShare),
    // `${Math.round(Number(DividendYield) * 100).toFixed(2)}%`,
    `${(Number(DividendYield) * 100).toFixed(2)}%`,
    // Number(EPS),
    Number(EPS) * 15, // FairValue
    Number(BookValue),
    `${Number(_52WeekLow)} - ${Number(_52WeekHigh)}`, // 52Week Price Range
    Number(AnalystTargetPrice),
    Number(Price),
  ];
  //
  // console.log(processedStocksData[6]);

  return (
    <article
      className={`m-6 p-6 rounded-2xl shadow-md shadow-gray-500 text-slate-300 bg-slate-600 transition-all hover:bg-slate-800 hover:scale-x-[1.02] hover:shadow-lg hover:shadow-gray-500`}
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
