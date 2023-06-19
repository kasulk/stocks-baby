import useSWR from "swr";
import StocksList from "../../components/StocksList";
// import Image from "next/image";

export default function Home() {
  // const { data: stockData } = useSWR("/api/stocks", { fallbackData: [] });
  const { data } = useSWR("/api/stocks", { fallbackData: [] });

  return (
    <>
      <StocksList stocksData={data}></StocksList>
    </>
  );
}
