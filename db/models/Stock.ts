import mongoose from "mongoose";

const { Schema } = mongoose;

const stockSchema = new Schema({
  name: String,
  //name: { type: String, required: true },
  type: String,
});

// check whether the model with this name has already been compiled and if yes, take the already compiled model
const Stock = mongoose.models.Stock || mongoose.model("Stock", stockSchema);

export default Stock;
