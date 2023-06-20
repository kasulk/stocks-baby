import useSWR from "swr";
import StocksList from "../components/StocksList";
import { StockType } from "../../types";
// import Image from "next/image";

export default function Home() {
  const { data } = useSWR("/api/stocks", { fallbackData: [] });

  return (
    <>
      <StocksList stocks={data}></StocksList>
    </>
  );
}
