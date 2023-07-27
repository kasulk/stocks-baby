error Error [StrictPopulateError]: Cannot populate path `authorInfo` because it is not in your schema. Set the `strictPopulate` option to false to override.


error Error [MissingSchemaError]: Schema hasn't been registered for model "User". Use mongoose.model(name, schema)

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  //
  await dbConnect();

  if (request.method === "GET") {
    const posts = await Overview.find().populate("authorInfo");
    return response.status(200).json(posts);
  }
}