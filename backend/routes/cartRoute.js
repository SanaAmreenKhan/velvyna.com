import express from "express";
import {
  addToCart,
  updateUserCart,
  getCartData,
} from "../controllers/cartController.js";
import authUser from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/get", authUser, getCartData);
cartRouter.post("/add", authUser, addToCart);
cartRouter.post("/update", authUser, updateUserCart);

export default cartRouter;
