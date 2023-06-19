import mongoose from "mongoose";

const { Schema } = mongoose;

const demoStockSchema = new Schema({
  name: String,
  //name: { type: String, required: true },
  type: String,
});

// check whether the model with this name has already been compiled and if yes, take the already compiled model
const DemoStock =
  mongoose.models.DemoStock || mongoose.model("DemoStock", demoStockSchema);

export default DemoStock;
