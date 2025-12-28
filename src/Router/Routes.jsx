import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Main Layouts/Layouts";
import Home from "../PAGES/HOME/Home";
import ErrorPage from "../Shared Components/ErrorPage"; 
import AboutUs from "../PAGES/ABoutUs/ABoutUs";
import SignIn from "../PAGES/AuthPages/SignIn";
import Register from "../PAGES/AuthPages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <ErrorPage></ErrorPage>, 
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      
      // Auth Routs

      {
          path: "/signin",
          element: <SignIn></SignIn>,
      },
      {
          path: "/register",
          element: <Register></Register>,
      },
      // ভবিষ্যতে অন্য কোনো পেজ (যেমন About বা Contact) এখানে যোগ করতে পারেন
    ],
  },
]);

export default router;