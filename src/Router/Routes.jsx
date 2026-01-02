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
import UpdatePackage from "../ManagePackage/UpdatePackage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tourpackages/:id",
        element: <TourPackageDetails />,

        loader: ({ params }) =>
          fetch(
            `https://go-beyond-server-mu.vercel.app/tourpackages/${params.id}`
          ),
      },
      {
        path: "/book-package/:id",
        element: (
          <PrivateRoutes>
            <BookPackage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-package/:id",
        element: (
          <PrivateRoutes>
            {" "}
            <UpdatePackage />{" "}
          </PrivateRoutes>
        ),

        loader: ({ params }) =>
          fetch(
            `https://go-beyond-server-mu.vercel.app/tourpackages/${params.id}`
          ),
      },
      {
        path: "/packages",
        element: <All_Package />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/add-package",
        element: <AddPackage />,
      },
      {
        path: "/manage-packages",
        element: <ManagePackage />,
      },
      {
        path: "/my-bookings",
        element: <MyBookings />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
