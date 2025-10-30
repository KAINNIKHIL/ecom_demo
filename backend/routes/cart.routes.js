import express from "express";
import CartItem from "../models/CartItem.js";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const items = await CartItem.find().populate("productId");
    const total = items.reduce((acc, i) => acc + i.productId.price * i.qty, 0);
    res.json({ items, total });
  } catch {
    res.status(500).json({ message: "Failed to fetch cart" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { productId, qty } = req.body;
    const existing = await CartItem.findOne({ productId });
    if (existing) {
      existing.qty += qty;
      await existing.save();
    } else {
      await CartItem.create({ productId, qty });
    }
    res.json(await CartItem.find().populate("productId"));
  } catch {
    res.status(500).json({ message: "Failed to add to cart" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await CartItem.findByIdAndDelete(req.params.id);
    res.json(await CartItem.find().populate("productId"));
  } catch {
    res.status(500).json({ message: "Failed to remove item" });
  }
});

router.post("/checkout", async (req, res) => {
  try {
    const items = await CartItem.find().populate("productId");
    const total = items.reduce((acc, i) => acc + i.productId.price * i.qty, 0);
    await CartItem.deleteMany();
    res.json({ total, timestamp: new Date().toISOString() });
  } catch {
    res.status(500).json({ message: "Checkout failed" });
  }
});

export default router;
