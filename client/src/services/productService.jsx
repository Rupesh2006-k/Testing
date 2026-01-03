import axios from "axios";
export const getAllProducts = async () => {
  const res = await axios.get("http://localhost:3000/api/product/getall");
  return res.data.products;
};