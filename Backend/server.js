require("dotenv").config();
const path = require("path");
const express = require("express");
const app = require("./src/app"); // API + middleware
const connectDB = require("./src/db/db");

const PORT = process.env.PORT || 3000;

// Connect to DB
connectDB();

// Serve frontend static files
app.use(express.static(path.join(__dirname, "client/dist")));

// SPA fallback for React/Vite
// Use regex /.*/ to avoid path-to-regexp wildcard issues
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
