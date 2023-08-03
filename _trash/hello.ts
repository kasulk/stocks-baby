import dbConnect from "../../../../db/connect";
import Posts from "../../../../db/models/Posts";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  await dbConnect();

  if (request.method === "GET") {
    const posts = await Posts.find().populate("additionalData");
    return response.status(200).json(posts);
  }
}
