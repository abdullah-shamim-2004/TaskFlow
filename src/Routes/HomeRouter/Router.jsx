import { createBrowserRouter } from "react-router";
import RootLayout from "../../Layouts/RootLayout/RootLayout";
import Home from "../../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[{
        index:true,
        element: <Home/>
    }]
  },
]);
export default router;
