import axios from "axios";
export const getAllProducts = async () => {
  const res = await axios.get("https://testing-99px.onrender.com/api/product/getall");
  return res.data.products;
};