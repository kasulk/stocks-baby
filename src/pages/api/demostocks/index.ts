import dbConnect from "../../../../db/connect";
import Demostock from "../../../../db/models/Demostock";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
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

  // @patchrequest, step3
  if (request.method === "PATCH") {
    await toggleUserToStockFavorites(request, response);
  } else {
    return response.status(405).json({ message: "HTTP Method not allowed" });
  }
}

async function toggleUserToStockFavorites(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { id, Favorites } = request.body;
  try {
    const demostockToUpdate = await Demostock.findById(id);
    if (demostockToUpdate.Favorites.includes(Favorites)) {
      await Demostock.findOneAndUpdate({ _id: id }, { $pull: { Favorites } });
      // console.log(`User '${Favorites}' removed from Favorites array`);
      response.status(200).json(demostockToUpdate);
    } else {
      await Demostock.findOneAndUpdate({ _id: id }, { $push: { Favorites } });
      // console.log(`User '${Favorites}' added to Favorites array`);
      response.status(200).json(demostockToUpdate);
    }
  } catch (error) {
    console.error("Error updating the Favorites Array...", error);
    response
      .status(500)
      .json({ message: "Error updating favorites in the database..." });
  }
}
