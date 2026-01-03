const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUserController = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;

    if (!name || !email || !mobile || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      name,
      email,
      mobile,
      password: hashedPassword,
    });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });
res.cookie("token", token, {
  httpOnly: true,
  secure: true,        // MUST for HTTPS
  sameSite: "none",    // Cross-site cookie ke liye
});


    req.user = user;
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
  httpOnly: true,
  secure: true,        // MUST for HTTPS
  sameSite: "none",    // Cross-site cookie ke liye
});


    return res.status(200).json({
      success: true,
      message: "User login successful",
      data: user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const logoutUserController = async (req, res) => {
  try {
    res.clearCookie("token");

    return res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const currentUserController = async (req, res) => {
  console.log("check  user ->", req.user);
  return res.status(200).json({
    message: "Current user fetched",
    user: req.user,
  });
};

const getAllUserController = async (req, res) => {
  try {
    const users = await userModel.find();

    return res.status(200).json({
      success: true,
      message: "All users fetched successfully",
      totalUsers: users.length,
      users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
};

module.exports = {
  registerUserController,
  loginUserController,
  logoutUserController,
  currentUserController,
  getAllUserController,
};


/* 

https://deployement-end.onrender.com/
https://deployement-end.onrender.com/
*/ 