import Image from "next/image";
import InfoButton from "../InfoButton";

const logoSize = 64;
// const logoSize = "4rem";

type Props = {
  Symbol: string;
  Exchange: string;
  LogoURL: string;
  Name: string;
  Description: string;
  Sector: string;
  Industry: string;
};

export default function StockCardHeader({
  Symbol,
  Exchange,
  LogoURL,
  Name,
  Description,
  Sector,
  Industry,
}: Props) {
  return (
    <header>
      <p className="text-xs">
        <span>{Symbol}</span>:<span>{Exchange}</span>
      </p>
      <div className="h-20">
        <a
          href={`https://finviz.com/quote.ashx?t=${Symbol}&p=w`}
          target="_blank"
          // className="bg-green-500"
        >
          <Image
            className="inline rounded-full mt-4 object-scale-down bg-accent-3"
            // className={`rounded-full mt-4 object-scale-down w-${logoSize} h-${logoSize}`}
            src={LogoURL}
            width={logoSize}
            height={logoSize}
            alt={`Logo of ${Name}`}
          />
        </a>
      </div>
      <h1 className="my-2 font-bold text-xl h-16">
        <span>{Name}</span>
        {Description && (
          <span title={Description}>
            <InfoButton />
          </span>
        )}
      </h1>
      <div className="my-2 text-xs text-right">
        <p className="my-1 font-bold">{Sector}</p>
        <p>{Industry}</p>
      </div>
    </header>
  );
}
