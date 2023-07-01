import Image from "next/image";
import InfoButton from "../InfoButton";
import FavoriteButton from "../FavoriteButton";
import StockCardValue from "../StockCardValue";
import StockCardHeader from "../StockCardHeader";
import { calc52WeekBruchwert } from "@/utils/DataUtils";

// const logoSize = 64;

type Props = {
  _id: string;
  Symbol: string;
  Name: string;
  Description: string;
  Exchange: string;
  Sector: string;
  Industry: string;
  DividendPerShare: number;
  DividendYield: number;
  EPS: number;
  EPSx15: number;
  BookValue: number;
  _52WeekHigh: number;
  _52WeekLow: number;
  AnalystTargetPrice: number;
  Price: number;
  Bruchwert52Week: number;
  onToggleFavorite: (id: string, user: string) => void;
  Favorites?: string[];
  currentUser: string;
  LogoURL: string;
};

export default function StockCard({
  _id,
  Symbol,
  Name,
  Description,
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
  Favorites,
  currentUser,
  LogoURL,
}: Props) {
  //
  const distFairValue = (100 * (Price - EPSx15)) / Price;
  const distBookValue = (100 * (Price - BookValue)) / Price;
  const distAnalystTarget = (100 * (Price - AnalystTargetPrice)) / Price;


  const stockNumbersToRender = [
    {
      title: 'Dividend',
      value: DividendPerShare.toFixed(2),
      // DividendPerShare,
      // Dividend: DividendPerShare,
      styles: "text-sm text-slate-400"
    },
    {
      title: 'Dividend%',
      // DividendYield: DividendYield ? `${DividendYield.toFixed(2)}%` : "-",
      value: DividendYield ? `${DividendYield.toFixed(2)}%` : "-",
      styles: "text-sm text-slate-400"
    },
    {
      title: 'EPS',
      value: EPS.toFixed(2),
      styles: "text-sm text-slate-400"
    },
    {
      title: 'FairValue',
      value: EPSx15.toFixed(2),
      styles: "text-sm text-slate-400",
      distToPrice: ((100 * (Price - EPSx15)) / Price).toFixed(0)
    },
    {
      title: 'BookValue',
      value: BookValue.toFixed(2),
      styles: "text-sm text-slate-400",
      distToPrice: ((100 * (Price - BookValue)) / Price).toFixed(0)
    },
    {
      title: '52W Range',
      value: `${_52WeekLow.toFixed(2)} - ${_52WeekHigh.toFixed(2)}`,
      styles: "text-sm text-slate-400",
      // distToPrice: (100 * (Price - Bruchwert52Week)) / Price
      // distToPrice: ((100 * (Price - calc52WeekBruchwert(Price,_52WeekHigh,_52WeekLow))) / Price).toFixed(0)
      distToPrice: `${((100 * (Price - calc52WeekBruchwert(Price,_52WeekHigh,_52WeekLow))) / Price).toFixed(0)}%`
    },
    {
      title: 'Analyst Target',
      value: AnalystTargetPrice.toFixed(2),
      styles: "text-sm text-slate-400",
      distToPrice: ((100 * (Price - AnalystTargetPrice)) / Price).toFixed(0)
    },
    {
      title: 'Price',
      value: Price.toFixed(2),
      styles: "text-sm text-slate-400",
    },
  ]
  console.log(stockNumbersToRender);
  
  return (
    <article
      className={`relative m-6 p-6 rounded-2xl shadow-md shadow-gray-500 text-slate-300 bg-slate-600 transition-all hover:bg-slate-800 hover:scale-x-[1.02] hover:shadow-lg hover:shadow-gray-500`}
    >
      <FavoriteButton onToggleFavorite={onToggleFavorite} _id={_id} Favorites={Favorites} currentUser={currentUser} />
      <StockCardHeader Symbol={Symbol} Exchange={Exchange} LogoURL={LogoURL} Name={Name} Description={Description} Sector={Sector} Industry={Industry}/>
{/* 
      <StockCardBody />
        <StockCardNumberTitle />
        <StockCardNumberValue />
 */}

      {/*     >>> Numbers <<<     */}

      <p>
        <span className="text-sm text-slate-400">Dividend: </span>
        <span>
          {/* {DividendPerShare != "0" ? Number(DividendPerShare).toFixed(2) : "-"} */}
          {/* {Number(DividendPerShare) ? Number(DividendPerShare).toFixed(2) : "-"} */}
          {DividendPerShare.toFixed(2)}
        </span>
      </p>
      <p>
        <span className="text-sm text-slate-400">Dividend %: </span>
        <span>{DividendYield ? `${DividendYield.toFixed(2)}%` : "-"}</span>
      </p>
      <p>
        <span className="text-sm text-slate-400">EPS: </span>
        <span>{EPS}</span>
      </p>
      <p title="FairValue: EPS x 15">
        <span className="text-sm text-slate-400">FairValue: </span>
        {/* <span className="text-xs">{`${ */}
        <span className="text-xs bg-rose-500 text-rose-950 rounded px-0.5">{`${
          distFairValue > 0
            ? `+${distFairValue.toFixed(0)}`
            : distFairValue.toFixed(0)
        }% `}</span>
        <span>{EPSx15.toFixed(2)}</span>
      </p>
      {/* <p title="FairValue: EPS x 15">
        <span className="text-sm text-slate-400">FairValue (EPS): </span>
        <span>{`${Number(EPSx15).toFixed(2)} (${Number(EPS).toFixed( 2)})`}</span>
      </p> */}
      <p>
        <span className="text-sm text-slate-400">BookValue: </span>
        <span className="text-xs bg-rose-500 text-rose-950 rounded px-0.5">{`${
          distBookValue > 0
            ? `+${distBookValue.toFixed(0)}`
            : distBookValue.toFixed(0)
        }% `}</span>
        <span>{BookValue.toFixed(2)}</span>
        {/* <span>{BookValue.toFixed(2)}</span> */}
      </p>
      <p>
        <span className="text-sm text-slate-400">52W Range: </span>
        <span className="text-xs bg-rose-500 text-rose-950 rounded px-0.5">
          {Bruchwert52Week ? Bruchwert52Week.toFixed(0) + "%" : "-"}
        </span>
        <span>
          {_52WeekLow.toFixed(2)} - {_52WeekHigh.toFixed(2)}
        </span>
      </p>
      <p
        className="line-through"
        title="Bruchwert: Current distance from 52Week Low in %"
      >
        <span className="text-sm text-slate-400">52W Bruchwert: </span>
        <span>{Bruchwert52Week ? Bruchwert52Week.toFixed(2) + "%" : "-"}</span>
      </p>
      <p>
        {/* <span className="text-sm text-slate-400">Analyst Target Price: </span> */}
        <span className="text-sm text-slate-400">Analyst Target: </span>
        <span className="text-xs bg-green-500 text-green-950 rounded px-0.5">{`${
          distAnalystTarget > 0
            ? `+${distAnalystTarget.toFixed(0)}`
            : distAnalystTarget.toFixed(0)
        }% `}</span>
        <span>{AnalystTargetPrice.toFixed(2)}</span>
      </p>
      <p>
        <span className="text-sm text-slate-400">Price: </span>
        {/* <span>{Price.toFixed(2)}</span> */}
        <StockCardValue>{Price.toFixed(2)}</StockCardValue>
      </p>
    </article>
  );
}
