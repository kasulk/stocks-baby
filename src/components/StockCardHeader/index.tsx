import Image from "next/image";
import InfoButton from "../InfoButton";

const logoSize = 64;
// const logoSize = "4rem";

type Props = {
  // Symbol: string;
  ticker: string;
  exchange: string;
  logoURL: string;
  name: string;
  description: string;
  sector: string;
  industry: string;
};

export default function StockCardHeader({
  // Symbol,
  ticker,
  exchange,
  logoURL,
  name,
  description,
  sector,
  industry,
}: Props) {
  return (
    <header>
      <p className="text-xs">
        {/* <span>{Symbol}</span>:<span>{Exchange}</span> */}
        <span>{ticker}</span>:<span>{exchange}</span>
      </p>
      <div className="h-20">
        <a
          // href={`https://finviz.com/quote.ashx?t=${Symbol}&p=w`}
          href={`https://finviz.com/quote.ashx?t=${ticker}&p=w`}
          target="_blank"
          // className="bg-green-500"
        >
          <Image
            className="inline rounded-full mt-4 object-scale-down bg-accent-3"
            // className={`rounded-full mt-4 object-scale-down w-${logoSize} h-${logoSize}`}
            src={logoURL}
            width={logoSize}
            height={logoSize}
            alt={`Logo of ${name}`}
          />
        </a>
      </div>
      <h1 className="my-2 font-bold text-xl h-16">
        <span>{name}</span>
        {description && (
          <span title={description}>
            <InfoButton />
          </span>
        )}
      </h1>
      <div className="my-2 text-xs text-right">
        <p className="my-1 font-bold">{sector}</p>
        <p className="h-10">{industry}</p>
      </div>
    </header>
  );
}
