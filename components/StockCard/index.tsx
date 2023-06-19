export default function StockCard({ ticker, name, exchange, assetType }) {
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
