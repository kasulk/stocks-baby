import { NextApiRequestQuery } from "next/dist/server/api-utils";
import dbConnect from "../../../../db/connect";
import Overview from "../../../../db/models/Overview";

// TS: NextApiRequest and NextApiResponse types from next,
// TS: provide type checking for the request and response objects.
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  // TS: Type annotation to the handler function, indicating that
  // TS: it expects a NextApiRequest and a NextApiResponse object
  request: NextApiRequest,
  response: NextApiResponse
) {
  //
  await dbConnect();

  if (request.method === "GET") {
    //! check if paginierung works in the api route
    //! e.g. http://localhost:3000/data?page=10&limit=5
    // https://www.golinuxcloud.com/paginate-with-mongoose-in-node-js/
    const { page = 1, limit = 12 } = request.query as {
      page?: number;
      limit?: number;
    };

    // request Overviews and combine with Quotes and Logourls based on the common field 'ticker'
    const stocks = await Overview.find()
      .sort({ ticker: 1 })
      // .limit(pageSize)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate("quotesData")
      .populate("logoData"); // note: icke test

    const count = await Overview.count();

    // return response.status(200).json(stocks);
    return response.status(200).json({
      stocks,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
    //
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
    const demostockToUpdate = await Overview.findById(id);
    if (demostockToUpdate.Favorites.includes(Favorites)) {
      await Overview.findOneAndUpdate({ _id: id }, { $pull: { Favorites } });
      // console.log(`User '${Favorites}' removed from Favorites array`);
      response.status(200).json(demostockToUpdate);
    } else {
      await Overview.findOneAndUpdate({ _id: id }, { $push: { Favorites } });
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
