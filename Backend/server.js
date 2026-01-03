require("dotenv").config(); 
let path = require('path')

const app = require("./src/app");
const connectDB = require("./src/db/db");
const PORT = process.env.PORT || 3000;
let __dirname = path.resolve()
connectDB();


app.use(express.static(path.join(__dirname, "frontend/dist")));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
});



app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
