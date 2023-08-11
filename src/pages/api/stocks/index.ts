import dbConnect from "../../../../db/connect";
import Overview from "../../../../db/models/Overview";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  //
  await dbConnect();

  if (request.method === "GET") {
    // const { page = 1, limit = 12 } = request.query as {
    const {
      page = 1,
      limit = 12,
      query, //new:
    } = request.query as {
      page?: number;
      limit?: number;
      query?: string; //new:
    };

    //new:
    if (query) {
      // Do a search if there is a search query
      const searchQuery = {
        $or: [
          // { ticker: { $regex: query, $options: "i" } },
          { name: { $regex: query, $options: "i" } },
        ],
      };
      // with search
      // request Overviews and combine with Quotes and Logourls based on the common field 'ticker'
      const stocks = await Overview.find(searchQuery)
        .sort({ ticker: 1 })
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .populate("quotesData")
        .populate("logoData");

      // const count = await Overview.count();

      return response.status(200).json(stocks);
    } else {
      // without search
      // request Overviews and combine with Quotes and Logourls based on the common field 'ticker'
      const stocks = await Overview.find()
        .sort({ ticker: 1 })
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .populate("quotesData")
        .populate("logoData");

      // const count = await Overview.count();

      return response.status(200).json(stocks);
      // return response.status(200).json({
      //   stocks,
      //   totalPages: Math.ceil(count / limit),
      //   currentPage: page,
      // });
      //
    }
  }

  // @patchrequest, step3
  if (request.method === "PATCH") {
    await toggleUserToStockFavorites(request, response);
  }
  //
  else {
    return response.status(405).json({ message: "HTTP Method not allowed" });
  }
}

async function toggleUserToStockFavorites(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { id, Favorites } = request.body;
  try {
    // const demostockToUpdate = await Overview.findById(id);
    const stockToUpdate = await Overview.findById(id);
    // if (demostockToUpdate.Favorites.includes(Favorites)) {
    if (stockToUpdate.Favorites.includes(Favorites)) {
      await Overview.findOneAndUpdate({ _id: id }, { $pull: { Favorites } });
      // console.log(`User '${Favorites}' removed from Favorites array`);
      // response.status(200).json(demostockToUpdate);
      response.status(200).json(stockToUpdate);
    } else {
      await Overview.findOneAndUpdate({ _id: id }, { $push: { Favorites } });
      // console.log(`User '${Favorites}' added to Favorites array`);
      // response.status(200).json(demostockToUpdate);
      response.status(200).json(stockToUpdate);
    }
  } catch (error) {
    console.error("Error updating the Favorites Array...", error);
    response
      .status(500)
      .json({ message: "Error updating favorites in the database..." });
  }
}
