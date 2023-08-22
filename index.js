import express from "express";
import mongoose from "mongoose";
import ProductsRoutes from "./routes/Products.js";
import UserRoutes from "./routes/User.js";
import Order from "./models/Order.js";
import Inventory from "./models/Inventory.js";
import User from "./models/User.js";
import { orderData, inventoryData, usersData } from "./data.js";

const app = express();
app.use(express.json());

const PORT = 5000;

app.use("/inventory", ProductsRoutes);
app.use("/auth", UserRoutes);

mongoose
  .connect(
    "mongodb+srv://longvuong1920:longvuong1920@testweb69.i1qp7ou.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    // Order.insertMany(orderData);
    // Inventory.insertMany(inventoryData);
    // User.insertMany(usersData);
    app.listen(PORT, () => console.log(`Server Port: ${PORT}!`));
  })
  .catch((error) => console.log(`${error}`));
