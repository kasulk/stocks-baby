import dbConnect from "../../../../db/connect";
import DemoStock from "../../../../db/models/DemoStock";
// import Stock from "../../../../db/models/Stock";

// TS: NextApiRequest and NextApiResponse types from next,
// TS: provide type checking for the request and response objects.
import { NextApiRequest, NextApiResponse } from "next";

// TS: Type annotation to the handler function, indicating that
// TS: it expects a NextApiRequest and a NextApiResponse object
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  await dbConnect();

  if (request.method === "GET") {
    const DemoStocks = await DemoStock.find();
    console.log("DemoStocks from DB:", DemoStocks);
    return response.status(200).json(DemoStocks);
  } else {
    return response.status(405).json({ message: "HTTP Method not allowed" });
  }
}
