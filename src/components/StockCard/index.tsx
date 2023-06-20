import { StockType } from "../../../types";

export default function StockCard({
  // id,
  ticker,
  name,
  exchange,
  assetType,
}: StockType) {
  return (
    <article>
      <h1 className="font-bold text-xl">{ticker}</h1>
      <p>{name}</p>
      <p>{exchange}</p>
      <p>{assetType}</p>
      <br />
    </article>
  );
}
