import FavoriteButton from "../FavoriteButton";
import StockCardHeader from "../StockCardHeader";
import StockCardBody from "../StockCardBody";
import { calc52WeekBruchwert } from "@/utils/DataUtils";
// import { useSession, signIn, signOut } from "next-auth/react";

type Props = {
  _id: string;
  ticker: string;
  name: string;
  description: string;
  exchange: string;
  sector: string;
  industry: string;
  dividendPerShare: number;
  dividendYield: number;
  eps: number;
  eps15x: number;
  bookValue: number;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekLow: number;
  analystTargetPrice: number;
  price: number;
  priceLatestUpdate: string;
  // bruchwert52Week: number;
  //
  logoURL: string;
  updatedAt: string;
  //
  onToggleFavorite: (id: string, user: string) => void;
  Favorites?: string[];
  //
  currentUser?: string | null;
};

export default function StockCard({
  _id,
  ticker,
  name,
  description,
  exchange,
  sector,
  industry,
  dividendPerShare,
  dividendYield,
  eps,
  eps15x,
  bookValue,
  fiftyTwoWeekHigh,
  fiftyTwoWeekLow,
  analystTargetPrice,
  price,
  priceLatestUpdate,
  //
  logoURL,
  updatedAt,
  //
  onToggleFavorite,
  Favorites,
  //
  currentUser,
}: Props) {
  //
  // const { data: session } = useSession();

  const stockNumbersToRender = [
    {
      title: "Price",
      value: price ? price.toFixed(2) : "-",
      styles: "text-sm text-customcontentcolor opacity-70",
    },
    {
      title: "Dividend",
      value: dividendPerShare ? `${dividendPerShare.toFixed(2)}` : "-",
      styles: "text-sm text-customcontentcolor opacity-70",
    },
    {
      title: "Dividend%",
      value: dividendYield ? `${(dividendYield * 100).toFixed(2)}%` : "-",
      styles: "text-sm text-customcontentcolor opacity-70",
    },
    {
      title: "EPS",
      value: eps ? eps.toFixed(2) : "-",
      styles: "text-sm text-customcontentcolor opacity-70",
    },
    {
      title: "FairValue",
      value: eps15x ? eps15x.toFixed(2) : "-",
      styles: "text-sm text-customcontentcolor opacity-70",
      distToPrice:
        price && eps15x ? ((100 * (price - eps15x)) / price).toFixed(0) : "-",
    },
    {
      title: "BookValue",
      value: bookValue ? bookValue.toFixed(2) : "-",
      styles: "text-sm text-customcontentcolor opacity-70",
      distToPrice:
        price && bookValue
          ? ((100 * (price - bookValue)) / price).toFixed(0)
          : "-",
    },
    {
      title: "52W Range",
      value:
        fiftyTwoWeekHigh && fiftyTwoWeekLow
          ? `${fiftyTwoWeekLow.toFixed(2)} - ${fiftyTwoWeekHigh.toFixed(2)}`
          : "-",
      styles: "text-sm text-customcontentcolor opacity-70",
      distToPrice:
        price && fiftyTwoWeekHigh && fiftyTwoWeekLow
          ? (
              100 *
              calc52WeekBruchwert(price, fiftyTwoWeekHigh, fiftyTwoWeekLow)
            ).toFixed(0)
          : "-",
    },
    {
      title: "Analyst Target",
      value: analystTargetPrice ? analystTargetPrice.toFixed(2) : "-",
      styles: "text-sm text-customcontentcolor opacity-70",
      distToPrice:
        price && analystTargetPrice
          ? ((100 * (price - analystTargetPrice)) / price).toFixed(0)
          : "-",
    },
  ];

  return (
    <article
      className={`relative m-6 p-6 rounded-2xl shadow-sm shadow-accent-1 text-content bg-accent-4 transition-all hover:scale-x-[1.02] md:hover:scale-x-[1.01] hover:shadow-md hover:shadow-accent-2  min-w-[320px] max-w-xs `}
    >
      {currentUser && (
        <FavoriteButton
          _id={_id}
          currentUser={currentUser}
          Favorites={Favorites}
          onToggleFavorite={onToggleFavorite}
        />
      )}
      <StockCardHeader
        ticker={ticker}
        exchange={exchange}
        logoURL={logoURL}
        name={name}
        description={description}
        sector={sector}
        industry={industry}
      />
      <StockCardBody
        stockNumbersToRender={stockNumbersToRender}
        priceLatestUpdate={priceLatestUpdate}
        updatedAt={updatedAt}
      />
    </article>
  );
}
