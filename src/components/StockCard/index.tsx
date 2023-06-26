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
  Bruchwert52Week,
}: StockType) {
  //
  // const processedStocksData: (string | number)[] = [
  //   Symbol,
  //   Name,
  //   Exchange,
  //   Sector,
  //   Industry,
  //   Number(DividendPerShare),
  //   // `${Math.round(Number(DividendYield) * 100).toFixed(2)}%`,
  //   `${(Number(DividendYield) * 100).toFixed(2)}%`,
  //   // Number(EPS),
  //   Number(EPS) * 15, // FairValue
  //   Number(BookValue),
  //   `${Number(_52WeekLow)} - ${Number(_52WeekHigh)}`, // 52Week Price Range
  //   Number(AnalystTargetPrice),
  //   Number(Price),
  // ];
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
        <span>
          {/* {DividendPerShare != "0" ? Number(DividendPerShare).toFixed(2) : "-"} */}
          {/* {Number(DividendPerShare) ? Number(DividendPerShare).toFixed(2) : "-"} */}
          {/* {Number(DividendPerShare).toFixed(2)} */}
        </span>
      </p>
      <p>
        <span className="text-sm text-slate-400">Dividend %: </span>
        <span>
          {Number(DividendYield) ? `${Number(DividendYield).toFixed(2)}%` : "-"}
        </span>
      </p>
      {/* <p>
        <span className="text-sm text-slate-400">EPS: </span>
        <span>{EPS}</span>
      </p> */}
      <p title="FairValue: EPS x 15">
        <span className="text-sm text-slate-400">FairValue (EPS): </span>
        <span>{`${(Number(EPS) * 15).toFixed(2)} (${Number(EPS).toFixed(
          2
        )})`}</span>
      </p>
      <p>
        <span className="text-sm text-slate-400">BookValue: </span>
        <span>{Number(BookValue).toFixed(2)}</span>
        {/* <span>{BookValue.toFixed(2)}</span> */}
      </p>
      <p>
        <span className="text-sm text-slate-400">52W Range: </span>
        <span>
          {Number(_52WeekLow).toFixed(2)} - {Number(_52WeekHigh).toFixed(2)}
        </span>
      </p>
      <p title="Bruchwert: Current distance from 52Week Low in %">
        <span className="text-sm text-slate-400">52W Bruchwert: </span>
        <span>
          {Number(Bruchwert52Week)
            ? Number(Bruchwert52Week).toFixed(2) + "%"
            : "-"}
        </span>
      </p>
      {/* <p title="Bruchwert: Current distance from 52Week Low in %">
        <span className="text-sm text-slate-400">52W Bruchwert (Range): </span>
        <span>
          {`${(Number(Bruchwert52Week) * 100).toFixed(
            2
          )}% (${_52WeekLow}-${_52WeekHigh})`}
        </span>
      </p> */}
      <p>
        <span className="text-sm text-slate-400">Analyst Target Price: </span>
        <span>{Number(AnalystTargetPrice).toFixed(2)}</span>
      </p>
      <p>
        <span className="text-sm text-slate-400">Price: </span>
        <span>{Number(Price).toFixed(2)}</span>
      </p>
    </article>
  );
}
