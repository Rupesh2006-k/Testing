import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

const PublicRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  let dispatch = useDispatch();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(
          "https://testing-99px.onrender.com/api/user/auth/current-user",
          { withCredentials: true } // 👈 CORRECT
        );

        setIsAuthenticated(!!res.data?.user);
        dispatch(res.data.user);
      } catch (err) {
        console.log("====================================");
        console.log(err);
        console.log("====================================");
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) return <div>Loading...</div>;

  if (isAuthenticated) {
    return <Navigate to="/main" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
