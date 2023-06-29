import mongoose from "mongoose";

const { Schema } = mongoose;

const favoriteSchema = new Schema({
  user: { type: String, required: true },
  favorites: [[]],
});

// check whether the model with this name has already been compiled and if yes, take the already compiled model
const Favorite =
  mongoose.models.Favorite || mongoose.model("Favorite", favoriteSchema);

export default Favorite;
