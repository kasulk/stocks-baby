import { StockType } from "../../../types";

export default function StockCard({
  Symbol,
  Name,
  Exchange,
  Industry,
  DividendPerShare,
  DividendYield,
  EPS,
  BookValue,
  _52WeekHigh,
  _52WeekLow,
  AnalystTargetPrice,
  Price,
}: // id,
// ticker,
// name,
// exchange,
// assetType,

StockType) {
  //
  return (
    <article>
      <span>{Symbol}</span>:<span>{Exchange}</span>
      <h1 className="font-bold text-xl">{Name}</h1>
      <p>
        <span>Industry: </span>
        {Industry}
      </p>
      <p>
        <span>Dividend: </span>
        {DividendPerShare != "0" ? DividendPerShare : "-"}
      </p>
      <p>
        <span>Dividend %: </span>
        {DividendYield != "0" ? Number(DividendYield) * 100 : "-"}
      </p>
      <p>
        <span>EPS: </span>
        {EPS}
      </p>
      <p>
        <span>BookValue: </span>
        {BookValue}
      </p>
      <p>
        <span>52W Range: </span>
        {_52WeekLow} - {_52WeekHigh}
      </p>
      <p>
        <span>Analyst Target Price: </span>
        {AnalystTargetPrice}
      </p>
      <p>
        <span>Price: </span>
        {Price}
      </p>
      {/* <p>{name}</pDividendsPerShare>
      <p>{exchange}</p>
      <p>{assetType}</p> */}
      <br />
      <hr />
    </article>
  );
}
