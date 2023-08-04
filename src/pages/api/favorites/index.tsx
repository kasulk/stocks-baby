//! not used so far
import dbConnect from "../../../../db/connect";
import Favorite from "../../../../db/models/Favorite";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
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
