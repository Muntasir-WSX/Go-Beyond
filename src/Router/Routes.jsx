import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Main Layouts/Layouts";
import Home from "../PAGES/HOME/Home";
import ErrorPage from "../Shared Components/ErrorPage"; 
import AboutUs from "../PAGES/ABoutUs/ABoutUs";
import SignIn from "../PAGES/AuthPages/SignIn";
import Register from "../PAGES/AuthPages/Register";
import AddPackage from "../ADD Package/AddPackage";
import ManagePackage from "../ManagePackage/ManagePackage";
import MyBookings from "../MyBookings/MyBookings";
import All_Package from "../All Packages/All_Package";
import TourPackageDetails from "../TourPackageDetails/TourPackageDetails";
import BookPackage from "../BookPackage/BookPackage";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

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
         path: "/tourpackages/:id",
         element: <TourPackageDetails></TourPackageDetails>,
         loader: ({params}) => fetch(`http://localhost:3000/tourPackages/${params.id}`),
      },
      {
            path: "/book-package/:id",
            element: <PrivateRoutes><BookPackage></BookPackage></PrivateRoutes>,
      },
      {
         path: "/packages",
         element: <All_Package></All_Package>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      
      // Auth Routs

      {
          path: "/add-package",
          element: <AddPackage></AddPackage>,
      },
      {
          path: "/manage-packages",
          element: <ManagePackage></ManagePackage>,
      },
      {
          path: "/my-bookings",
          element: <MyBookings></MyBookings>,
      },

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