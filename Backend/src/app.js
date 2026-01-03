const express = require("express");
const app = express();
let cookieParser = require("cookie-parser");
const userRouter = require("./routes/user.routes");
const productRouter = require("./routes/product.routes");
let cors = require("cors");

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin:"https://testing-99px.onrender.com",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/user/auth", userRouter);
app.use("/api/product", productRouter);

module.exports = app;