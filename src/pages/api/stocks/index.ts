import dbConnect from "../../../../db/connect";
import Stock from "../../../../db/models/Stock";

// TS: NextApiRequest and NextApiResponse types from next,
// TS: provide type checking for the request and response objects.
import { NextApiRequest, NextApiResponse } from "next";

// TS: Type annotation to the handler function, indicating that
// TS: it expects a NextApiRequest and a NextApiResponse object
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  //
  await dbConnect();
  // console.log("test");

  if (request.method === "GET") {
    const stocks = await Stock.find();
    console.log("DemoStocks from DB:", stocks);
    return response.status(200).json(stocks);
  } else {
    return response.status(405).json({ message: "HTTP Method not allowed" });
  }
}
