import { useEffect, useState } from "react";
import { isLogin } from "../features/AuthSlice";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/user/auth/current-user",
          { withCredentials: true }
        );
        const userExists = !!data?.user;
        setIsAuthenticated(userExists);
        if (userExists) dispatch(isLogin(data.user));
      } catch (err) {
        console.error(err);
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, [dispatch]);

  if (isAuthenticated === null) return <div>Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
};
export default ProtectedRoute;
