import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://testing-99px.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;
