import useSWR from "swr";
// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: stockData } = useSWR("/api/stocks", { fallbackData: [] });

  return (
    <>
      {stockData.map((stock) => (
        <div
          key={stock._id}
          className="text-red-500 bg-slate-600 hover:bg-slate-800"
        >
          {/* {stock.symbol} */}
          {stock.ticker}
          {/* {stock._id} */}
        </div>
      ))}
    </>
  );
}
