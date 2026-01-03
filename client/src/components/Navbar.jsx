import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLogout } from "../features/AuthSlice";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();

  const logout = async () => {
    try {
      await axios.get("http://localhost:3000/api/user/auth/logout");
      dispatch(isLogout());
      navigate("/", { replace: true });
    } catch (err) {
      console.log("Logout failed", err);
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between px-10 py-4 bg-gray-900">
        <h1 className="text-white text-xl font-bold">MyApp</h1>

        <div className="flex gap-6 items-center">
          <Link to="/main" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/main/user" className="text-gray-300 hover:text-white">
            User
          </Link>
          <Link to="/main/products" className="text-gray-300 hover:text-white">
            Products
          </Link>
          <Link to="/main/create" className="text-gray-300 hover:text-white">
           Create Products
          </Link>

          {/* ✅ Button for action */}
          <button
            onClick={logout}
            className="text-red-500 hover:text-white transition"
          >
            Logout
          </button>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
