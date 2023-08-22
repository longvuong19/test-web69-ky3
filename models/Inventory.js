import mongoose from "mongoose";

const InventorySchema = new mongoose.Schema({
  sku: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instock: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Inventory", InventorySchema);
