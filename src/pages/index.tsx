import useSWR from "swr";
import StocksList from "../components/StocksList";
import { StockType } from "../../types";
// import Image from "next/image";

export default function Home() {
  // move swr to stocklistitem?
  const { data } = useSWR("/api/demostocks", { fallbackData: [] });

  // console.log(data);

  return (
    <>
      <StocksList stocks={data}></StocksList>
    </>
  );
}
