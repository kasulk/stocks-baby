import FavoriteButton from "../FavoriteButton";
import StockCardHeader from "../StockCardHeader";
import StockCardBody from "../StockCardBody";
import { calc52WeekBruchwert } from "@/utils/DataUtils";

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
  const stockNumbersToRender = [
    {
      title: "Price",
      value: Price.toFixed(2),
      styles: "text-sm text-slate-400",
    },
    {
      title: "Dividend",
      value: DividendPerShare.toFixed(2),
      styles: "text-sm text-slate-400",
    },
    {
      title: "Dividend%",
      value: DividendYield ? `${DividendYield.toFixed(2)}%` : "-",
      styles: "text-sm text-slate-400",
    },
    {
      title: "EPS",
      value: EPS.toFixed(2),
      styles: "text-sm text-slate-400",
    },
    {
      title: "FairValue",
      value: EPSx15.toFixed(2),
      styles: "text-sm text-slate-400",
      distToPrice: (100 * (Price - EPSx15)) / Price,
    },
    {
      title: "BookValue",
      value: BookValue.toFixed(2),
      styles: "text-sm text-slate-400",
      distToPrice: (100 * (Price - BookValue)) / Price,
    },
    {
      title: "52W Range",
      value: `${_52WeekLow.toFixed(2)} - ${_52WeekHigh.toFixed(2)}`,
      styles: "text-sm text-slate-400",
      distToPrice: 100 * calc52WeekBruchwert(Price, _52WeekHigh, _52WeekLow),
    },
    {
      title: "Analyst Target",
      value: AnalystTargetPrice.toFixed(2),
      styles: "text-sm text-slate-400",
      distToPrice: (100 * (Price - AnalystTargetPrice)) / Price,
    },
  ];

  return (
    <article
      className={`relative m-6 p-6 rounded-2xl shadow-md shadow-gray-500 text-slate-300 bg-slate-600 transition-all hover:bg-slate-800 hover:scale-x-[1.02] md:hover:scale-x-[1.01] hover:shadow-lg hover:shadow-gray-500`}
    >
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        _id={_id}
        Favorites={Favorites}
        currentUser={currentUser}
      />
      <StockCardHeader
        Symbol={Symbol}
        Exchange={Exchange}
        LogoURL={LogoURL}
        Name={Name}
        Description={Description}
        Sector={Sector}
        Industry={Industry}
      />
      <StockCardBody stockNumbersToRender={stockNumbersToRender} />
    </article>
  );
}
