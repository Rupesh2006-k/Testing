require("dotenv").config();
const path = require("path");
const express = require("express"); // ✅ add this
const app = require("./src/app"); // tumhara main app jahan routers aur middleware hain
const connectDB = require("./src/db/db");

const PORT = process.env.PORT || 3000;

// Connect to DB
connectDB();

// Serve frontend
// Note: __dirname points to server.js folder
app.use(express.static(path.join(__dirname, "client/dist")));

// For SPA routing (React/Vite)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
