import userModel from "../models/userModel.js";

const addToCart = async (req, resp) => {
  try {
    const { userId, itemId, size } = req.body;

    const userData = await userModel.findById(userId);
    console.log(userData);
    let cartData = userData.cartData || {}; // Ensure it's at least an empty object

    // Safety check for itemId and size
    if (itemId && size) {
      if (!cartData[itemId]) {
        cartData[itemId] = {};
      }

      if (!cartData[itemId][size]) {
        cartData[itemId][size] = 0;
      }

      cartData[itemId][size] += 1;
    } else {
      console.error("itemId or size is undefined.");
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    resp.json({ success: true, message: "Added to Cart" });
  } catch (error) {
    console.log(error);
    resp.json({ success: false, message: error.message });
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
    let cartData = await userData.cartData;

    resp.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    resp.json({ success: false, message: error.message });
  }
};

export { addToCart, updateUserCart, getCartData };
