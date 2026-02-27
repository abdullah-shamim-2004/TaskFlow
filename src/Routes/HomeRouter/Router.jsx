import { createBrowserRouter } from "react-router";
import RootLayout from "../../Layouts/RootLayout/RootLayout";
import Home from "../../Pages/Home/Home";
import DashBoardLayout from "../../Layouts/DashBoardLayout/DashBoardLayout";
import DashBoardHome from "../../Pages/DashBoardHome/DashBoardHome";
import Analytics from "../../Pages/Analytics/Analytics";
import Users from "../../Pages/Users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout />,
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
        path: "/dashboard/analytics",
        element: <Analytics />,
      },
    ],
  },
]);
export default router;
