//! not used so far
import dbConnect from "../../../../db/connect";
import Favorite from "../../../../db/models/Favorite";

// TS: NextApiRequest and NextApiResponse types from next,
// TS: provide type checking for the request and response objects.
import { NextApiRequest, NextApiResponse } from "next";

// TS: from Next.js template...
// type Data = {
//   name: string;
// };

export default async function handler(
  // TS: Type annotation to the handler function, indicating that
  // TS: it expects a NextApiRequest and a NextApiResponse object
  request: NextApiRequest,
  response: NextApiResponse
  // response: NextApiResponse<Data>  // TS: from Next.js template...
) {
  //
  await dbConnect();

  if (request.method === "GET") {
    const favorites = await Favorite.find();
    return response.status(200).json(favorites);
  } else {
    return response.status(405).json({ message: "HTTP Method not allowed" });
  }
}
