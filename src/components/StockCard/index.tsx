import FavoriteButton from "../FavoriteButton";
import StockCardHeader from "../StockCardHeader";
import StockCardBody from "../StockCardBody";
import { calc52WeekBruchwert } from "@/utils/DataUtils";
import { useSession, signIn, signOut } from "next-auth/react";

type Props = {
  _id: string;
  // Symbol: string;
  ticker: string;
  name: string;
  description: string;
  exchange: string;
  sector: string;
  industry: string;
  dividendPerShare: number;
  dividendYield: number;
  eps: number;
  // EPSx15: number;
  eps15x: number;
  bookValue: number;
  // _52WeekHigh: number;
  // _52WeekLow: number;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekLow: number;
  analystTargetPrice: number;
  price: number;
  bruchwert52Week: number;
  onToggleFavorite: (id: string, user: string) => void;
  Favorites?: string[];
  currentUser?: string | null;
  logoURL: string;
};

export default function StockCard({
  _id,
  // Symbol,
  ticker,
  name,
  description,
  exchange,
  sector,
  industry,
  dividendPerShare,
  dividendYield,
  eps,
  // EPSx15,
  eps15x,
  bookValue,
  // _52WeekHigh,
  // _52WeekLow,
  fiftyTwoWeekHigh,
  fiftyTwoWeekLow,
  analystTargetPrice,
  price,
  bruchwert52Week,
  onToggleFavorite,
  Favorites,
  currentUser,
  logoURL,
}: Props) {
  //
  const { data: session } = useSession();
  const stockNumbersToRender = [
    {
      title: "Price",
      // value: Price.toFixed(2),
      value: "0",
      styles: "text-sm text-customcontentcolor opacity-70",
    },
    {
      title: "Dividend",
      // value: DividendPerShare ? `${DividendPerShare.toFixed(2)}` : "-",
      value: dividendPerShare ? `${dividendPerShare.toFixed(2)}` : "-",
      styles: "text-sm text-customcontentcolor opacity-70",
    },
    {
      title: "Dividend%",
      // value: DividendYield ? `${DividendYield.toFixed(2)}%` : "-",
      value: dividendYield ? `${dividendYield.toFixed(2)}%` : "-",
      styles: "text-sm text-customcontentcolor opacity-70",
    },
    {
      title: "EPS",
      value: eps.toFixed(2),
      styles: "text-sm text-customcontentcolor opacity-70",
    },
    {
      title: "FairValue",
      // value: EPSx15.toFixed(2),
      value: eps15x.toFixed(2),
      styles: "text-sm text-customcontentcolor opacity-70",
      distToPrice: (100 * (price - eps15x)) / price,
    },
    {
      title: "BookValue",
      value: bookValue.toFixed(2),
      styles: "text-sm text-customcontentcolor opacity-70",
      distToPrice: (100 * (price - bookValue)) / price,
    },
    {
      title: "52W Range",
      value: `${fiftyTwoWeekLow.toFixed(2)} - ${fiftyTwoWeekHigh.toFixed(2)}`,
      styles: "text-sm text-customcontentcolor opacity-70",
      distToPrice:
        100 * calc52WeekBruchwert(price, fiftyTwoWeekHigh, fiftyTwoWeekLow),
    },
    {
      title: "Analyst Target",
      value: analystTargetPrice.toFixed(2),
      styles: "text-sm text-customcontentcolor opacity-70",
      distToPrice: (100 * (price - analystTargetPrice)) / price,
    },
  ];

  return (
    <article
      // className={`relative m-6 p-6 rounded-2xl shadow-md shadow-gray-500 text-slate-300 bg-slate-600 transition-all hover:bg-slate-800 hover:scale-x-[1.02] md:hover:scale-x-[1.01] hover:shadow-lg hover:shadow-gray-500`}
      className={`relative m-6 p-6 rounded-2xl shadow-sm shadow-accent-1 text-content bg-accent-4 transition-all hover:scale-x-[1.02] md:hover:scale-x-[1.01] hover:shadow-md hover:shadow-accent-2  min-w-[320px] max-w-xs `}
    >
      {/* show favorite button only when user is logged in */}
      {/* {session && ( */}
      {currentUser && (
        <FavoriteButton
          _id={_id}
          currentUser={currentUser}
          Favorites={Favorites}
          onToggleFavorite={onToggleFavorite}
        />
      )}
      <StockCardHeader
        // Symbol={Symbol}
        ticker={ticker}
        exchange={exchange}
        logoURL={logoURL}
        name={name}
        description={description}
        sector={sector}
        industry={industry}
      />
      <StockCardBody stockNumbersToRender={stockNumbersToRender} />
    </article>
  );
}
