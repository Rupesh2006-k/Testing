const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully");
    return res;

  } catch (error) {
    console.error("❌ MongoDB Connection Failed");
    console.error(error.message);
    process.exit(1); // app band kar do if DB nahi mili
  }
};

module.exports = connectDB;
