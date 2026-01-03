import axios from "axios";
export const getAllUsers = async () => {
  const res = await axios.get("https://testing-99px.onrender.com/api/user/auth/get-user");
  return res.data.users;
};
