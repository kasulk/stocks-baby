import dbConnect from "../../../../db/connect";
import Demostock from "../../../../db/models/Demostock";

// TS: NextApiRequest and NextApiResponse types from next,
// TS: provide type checking for the request and response objects.
import { NextApiRequest, NextApiResponse } from "next";

// TS: from Next.js template...
// type Data = {
//   name: string;
// };

//test
const id = "";

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
    const demostocks = await Demostock.find();
    return response.status(200).json(demostocks);
  }

  if (request.method === "PATCH") {
    const demostockToUpdate = await Demostock.findByIdAndUpdate(id, {
      $set: request.body,
    });
    // Find the stock by its ID and update the content that is part of the request body!
    response.status(200).json(demostockToUpdate);
    // If successful, you'll receive an OK status code.
  }
  //
  else {
    return response.status(405).json({ message: "HTTP Method not allowed" });
  }
}
