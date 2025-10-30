import express from "express";
import axios from "axios";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let products = await Product.find();
    if (products.length === 0) {
      const { data } = await axios.get("https://fakestoreapi.com/products?limit=8");
      const formatted = data.map((p) => ({
        name: p.title,
        price: p.price,
        image: p.image,
      }));
      await Product.insertMany(formatted);
      products = await Product.find();
    }
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

export default router;
