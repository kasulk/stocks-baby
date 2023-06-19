import useSWR from "swr";
// import Image from "next/image";

export default function Home() {
  const { data: stockData } = useSWR("/api/stocks", { fallbackData: [] });

  return (
    <>
      {stockData.map((stock) => (
        <div
          key={stock._id}
          className="text-red-500 bg-slate-600 hover:bg-slate-800"
        >
          {stock.ticker}
        </div>
      ))}
    </>
  );
}
