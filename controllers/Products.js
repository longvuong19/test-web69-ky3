import Inventory from "../models/Inventory.js";
import Order from "../models/Order.js";

export const getProducts = async (req, res, next) => {
  try {
    const products = await Inventory.find();
    res.status(200).json({ products });
  } catch (error) {
    next(error);
  }
};

export const getLowProducts = async (req, res, next) => {
  try {
    const allProducts = await Inventory.find();
    const lowProducts = allProducts.filter(
      (product) => parseInt(product.instock) < 100
    );
    res.status(200).json({ lowProducts });
  } catch (error) {
    next(error);
  }
};

export const getOrdersWithDesc = async (req, res, next) => {
  try {
    const orders = await Order.find();

    const ordersWithDescriptions = await Promise.all(
      orders.map(async (order) => {
        const inventoryItem = await Inventory.findOne({ sku: order.item });
        return {
          _id: order._id,
          item: order.item,
          price: order.price,
          quantity: order.quantity,
          product: {
            description: inventoryItem.description,
          },
        };
      })
    );

    res.status(200).json(ordersWithDescriptions);
  } catch (error) {
    next(error);
  }
};
