import { createBrowserRouter } from "react-router";
import Layouts from "../Main Layouts/Layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>
  },
]);

export default router;