import axios from "axios";
export const getAllUsers = async () => {
  const res = await axios.get("http://localhost:3000/api/user/auth/get-user");
  return res.data.users;
};
