import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Order", OrderSchema);
