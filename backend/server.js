import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config({
    path:'.env'
})


connectDB();

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
