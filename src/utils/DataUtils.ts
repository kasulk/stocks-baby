import { Stock } from "../../types";

export function addBruchwertPropertyToArrOfObjs(arrOfObjects: Stock[]): void {
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

export function convertNumberStringPropertiesToNumbers(
  arrOfObjects: Stock[]
): void {
  // arrOfObjects.forEach((object) => {
  // TS: type object so it can accept indexes of type string
  arrOfObjects.forEach((object: { [key: string]: any }) => {
    for (let key in object) {
      // if the value is a number, convert it into a number
      if (Number(object[key]) || object[key] === "0") {
        object[key] = Number(object[key]);
      }
      // convert DividendYield to actual percentage value
      if (key === "DividendYield") {
        object[key] = object[key] * 100;
      }
    }
  });
}

export function removeDoublesfromArray(arr: Stock[]): Stock[] {
  return [...new Set(arr)]; // Set object is ES6
}
