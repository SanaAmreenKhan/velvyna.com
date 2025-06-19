import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY);
};

//Route for login
const loginUser = async (req, resp) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return resp.json({ success: false, message: "User not found." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      resp.json({ success: true, token });
    } else {
      return resp.json({ success: false, message: "Invalid credentials." });
    }
  } catch (error) {
    console.log(error);
    return resp.json({ success: false, message: error.message });
  }
};

//Route for registration
const registerUser = async (req, resp) => {
  try {
    const { name, email, password } = req.body;

    //checking user already exist
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return resp.json({ success: false, message: "User already exists" });
    }

    //validating email format & password
    if (!validator.isEmail(email)) {
      return resp.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    if (password.length < 8) {
      return resp.json({
        success: false,
        message: "Please enter a strong password",
      });
    }
    //hashing user passwrod
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    return resp.json({ success: true, token });
  } catch (error) {
    console.log(error);
    return resp.json({ success: false, message: error.message });
  }
};

//Route for admin login
const loginAdmin = async (req, resp) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET_KEY);
      resp.json({ success: true, token });
    } else {
      resp.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    return resp.json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser, loginAdmin };
