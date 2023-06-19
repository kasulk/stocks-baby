import useSWR from "swr";
// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const url = "../../_ressources/demoStocks.json";
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());

  // const { data } = useSWR(url, fetcher);
  // console.log(data);

  // render data
  // return <div>Hello {data.name}!</div>; // Hello Luke Skywalker!

  return (
    <>
      <div className="text-red-500 bg-slate-600 hover:bg-slate-800">test</div>
    </>
  );
}
