import { createBrowserRouter } from "react-router";
import RootLayout from "../../Layouts/RootLayout/RootLayout";
import Home from "../../Pages/Home/Home";
import DashBoardLayout from "../../Layouts/DashBoardLayout/DashBoardLayout";
import DashBoardHome from "../../Pages/DashBoardHome/DashBoardHome";
import Analytics from "../../Pages/Analytics/Analytics";
import Users from "../../Pages/Users/Users";
import Products from "../../Pages/Products/Products";
import AddProducts from "../../Pages/AddProducts/AddProducts";
import AuthLayout from "../../Layouts/AuthLayout/AuthLayout";
import Login from "../../Auth/Login/Login";
import Register from "../../Auth/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllProducts from "../../Pages/AllProducts/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashBoardHome />,
      },
      {
        path: "/dashboard/users",
        element: <Users />,
      },
      {
        path: "/dashboard/products",
        element: <Products />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProducts />,
      },
      {
        path: "/dashboard/analytics",
        element: <Analytics />,
      },
    ],
  },
]);
export default router;
