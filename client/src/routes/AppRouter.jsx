import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Error404 from "../pages/Error404";
import Navbar from "../components/Navbar";
import CreateProduct from "../components/CreateProduct";
import ProductPage from "../pages/ProductPage";
import UserPage from "../pages/UserPage";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute />,
    children: [
      {
        path: "",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage/>,
      },
    ],
  },

  {
    path: "/main",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <Navbar />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
          {
            path: "user",
            element: <UserPage />,
          },
          {
            path: "products",
            element: <ProductPage />,
          },
          {
            path: "create",
            element: <CreateProduct />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
