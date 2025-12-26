import { createBrowserRouter } from "react-router";
import Layouts from "../Main Layouts/Layouts";
import Home from "../PAGES/HOME/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;