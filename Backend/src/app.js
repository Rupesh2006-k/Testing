const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRouter = require("../routes/user.routes");
const productRouter = require("../routes/product.routes");

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS config
app.use(
  cors({
    origin: "http://localhost:5173", // dev frontend URL
    credentials: true,
  })
);

// Test route
app.get("/api/ping", (req, res) => {
  res.json({ message: "Backend is alive!" });
});

// Routers
app.use("/api/user/auth", userRouter);
app.use("/api/product", productRouter);

module.exports = app;
