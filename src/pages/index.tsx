import useSWR from "swr";
import StocksList, { Stock } from "../components/StocksList";
// import Image from "next/image";

export default function Home() {
  // const { data } = useSWR("/api/stocks", { fallbackData: [] });
  const data = useSWR("/api/stocks", {
    fallbackData: [],
  }) as unknown as Stock[];

  return (
    <>
      {/* <StocksList stocksData={data}></StocksList> */}
      <StocksList {...data}></StocksList>
    </>
  );
}
