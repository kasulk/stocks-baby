import Image from "next/image"
import InfoButton from "../InfoButton";

const logoSize = 64;


type Props = {
  Symbol: string;
  Exchange: string;
  LogoURL: string;
  Name: string;
  Description: string;
  Sector: string;
  Industry: string
}

export default function StockCardHeader({

      Symbol, Exchange, LogoURL, Name, Description, Sector, Industry 
}:Props

) {
  return (
      <header>
      <p className="text-xs">
        <span>{Symbol}</span>:<span>{Exchange}</span>
      </p>
        <Image
          className="w-auto h-auto rounded-full mt-4 object-scale-down"
          src={LogoURL}
          width={logoSize}
          height={logoSize}
          alt={`Logo of ${Name}`}
        />
        <h1 className="my-2 font-bold text-xl">
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

  )
}