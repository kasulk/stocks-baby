import { StockType } from "../../../types";

export default function StockCard({
  Symbol,
}: // id,
// ticker,
// name,
// exchange,
// assetType,
StockType) {
  return (
    <article>
      <h1 className="font-bold text-xl">{Symbol}</h1>
      {/* <p>{name}</p>
      <p>{exchange}</p>
      <p>{assetType}</p> */}
      <br />
    </article>
  );
}
