import { Stock } from "../../types";

export function addBruchwertPropertyToArrOfObjs(arrOfObjects: Stock[]): void {
  arrOfObjects.forEach((object) => {
    // object["Bruchwert52Week"] = calc52WeekBruchwert(
    object["bruchwert52Week"] = calc52WeekBruchwert(
      // object.Price,
      object.price,
      // object._52WeekHigh,
      object.fiftyTwoWeekHigh,
      // object._52WeekLow
      object.fiftyTwoWeekLow
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

// if today, return 'today, 14:21 (UTC)'
// else return e.g. '2 days ago'
export function formatTimestampToDays(timestamp: string): string {
  // convert ISO 8601 input date string
  // e.g. "2023-07-25T14:21:47.189Z";
  // into JavaScript date (object)
  const date: Date = new Date(timestamp);

  const year: number = date.getFullYear();
  const month: number = date.getMonth();
  const day: number = date.getDate();
  const hour: number = date.getHours();
  const minute: number = date.getMinutes();

  const today: Date = new Date();
  const currentYear: number = today.getFullYear();
  const currentMonth: number = today.getMonth();
  const currentDay: number = today.getDate();

  // If date is today,
  if (year === currentYear && month === currentMonth && day === currentDay) {
    // return 'today' + time + '(UTC)'
    return `today, ${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")} (UTC)`;
  } else {
    // Else calculate and show passed days since
    const diffTime: number = Math.abs(today.getTime() - date.getTime());
    const diffDays: number = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
  }
}

// format ISO 8601 date into '2023 Jul 25, 14:21 (UTC)'
export function formatTimestampToDate(timestamp: string) {
  const date = new Date(timestamp);

  const year: number = date.getFullYear();
  const month: number = date.getMonth();
  const day: number = date.getDate();
  const hour: number = date.getHours();
  const minute: number = date.getMinutes();

  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = months[month];

  // format date into YYYY MMM DD, HH:MM (UTC)
  return `${year} ${monthName} ${day}, ${hour
    .toString()
    .padStart(2, "0")}:${minute.toString().padStart(2, "0")} (UTC)`;
}
