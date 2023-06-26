import { FuncProps, StockType } from "../../../types";
import FavoriteButton from "../FavoriteButton";
import FavoriteButtonIcon from "../FavoriteButtonIcon";

export default function StockCard({
  _id,
  Symbol,
  Name,
  Exchange,
  Sector,
  Industry,
  DividendPerShare,
  DividendYield,
  EPS,
  EPSx15,
  BookValue,
  _52WeekHigh,
  _52WeekLow,
  AnalystTargetPrice,
  Price,
  Bruchwert52Week,
  onToggleFavorite,
}: StockType) {
  //
  // console.log(onToggleFavorite);

  return (
    <article
      className={`m-6 p-6 rounded-2xl shadow-md shadow-gray-500 text-slate-300 bg-slate-600 transition-all hover:bg-slate-800 hover:scale-x-[1.02] hover:shadow-lg hover:shadow-gray-500 relative`}
    >
      <p className="text-xs">
        <span>{Symbol}</span>:<span>{Exchange}</span>
      </p>
      <h1 className="font-bold text-xl">
        {Name}
        <FavoriteButton onToggleFavorite={onToggleFavorite} _id={_id} />
      </h1>
      <div className="text-xs">
        <p>{Sector}</p>
        <p>{Industry}</p>
      </div>
      {/* Numbers */}
      <p>
        <span className="text-sm text-slate-400">Dividend: </span>
        <span>
          {/* {DividendPerShare != "0" ? Number(DividendPerShare).toFixed(2) : "-"} */}
          {/* {Number(DividendPerShare) ? Number(DividendPerShare).toFixed(2) : "-"} */}
          {Number(DividendPerShare).toFixed(2)}
        </span>
      </p>
      <p>
        <span className="text-sm text-slate-400">Dividend %: </span>
        <span>
          {Number(DividendYield) ? `${Number(DividendYield).toFixed(2)}%` : "-"}
        </span>
      </p>
      <p>
        <span className="text-sm text-slate-400">EPS: </span>
        <span>{EPS}</span>
      </p>
      <p title="FairValue: EPS x 15">
        <span className="text-sm text-slate-400">FairValue: </span>
        <span>{`${Number(EPSx15).toFixed(2)}`}</span>
      </p>
      {/* <p title="FairValue: EPS x 15">
        <span className="text-sm text-slate-400">FairValue (EPS): </span>
        <span>{`${Number(EPSx15).toFixed(2)} (${Number(EPS).toFixed( 2)})`}</span>
      </p> */}
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
