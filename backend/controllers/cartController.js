import userModel from "../models/userModel.js";

const addToCart = async (req, resp) => {
  try {
    const { userId, itemId, size } = req.body;

    if (!userId || !itemId || !size) {
      return resp.status(400).json({
        success: false,
        message: "Missing userId, itemId or size",
      });
    }

    const userData = await userModel.findById(userId);

    if (!userData) {
      return resp.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Clone or initialize cartData
    let cartData = userData.cartData || {};

    // Initialize item if it doesn't exist
    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    // Initialize size count if not exist
    cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;

    // Save the updated cart to DB
    await userModel.findByIdAndUpdate(userId, { cartData });

    return resp.json({ success: true, message: "Added to Cart" });
  } catch (error) {
    console.error("Add to cart error:", error);
    return resp.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const updateUserCart = async (req, resp) => {
  try {
    const { userId, itemId, size, quantity } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });

    resp.json({ success: true, message: "Cart updated" });
  } catch (error) {
    console.log(error);
    resp.json({ success: false, message: error.message });
  }
};

const getCartData = async (req, resp) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId);
    console.log(userData, userId);
    let cartData = await userData.cartData;

    resp.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    resp.json({ success: false, message: error.message });
  }
};

export { addToCart, updateUserCart, getCartData };
