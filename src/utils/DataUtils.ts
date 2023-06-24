import { StockType } from "../../types";

export default function addBruchwertPropertyToArrOfObjs(
  arrOfObjects: StockType[]
): void {
  arrOfObjects.forEach((object) => {
    object["Bruchwert52Week"] = calc52WeekBruchwert(
      object.Price,
      object._52WeekHigh,
      object._52WeekLow
    );
  });
}

export function calc52WeekBruchwert(
  currentPrice: number,
  high: number,
  low: number
): number {
  const bruchwert = (currentPrice - low) / (high - low);

  return bruchwert; //.toFixed(4);
}
