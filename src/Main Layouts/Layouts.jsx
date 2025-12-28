import React, { useEffect } from "react"; // ১. useEffect ইম্পোর্ট করুন
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Shared Components/Nav";
import Footer from "../Shared Components/Footer";

const Layouts = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const hideHeaderFooter =
    location.pathname.includes("signin") ||
    location.pathname.includes("register");

  return (
    <div>
      {!hideHeaderFooter && <Nav />}

      <main>
        <Outlet />
      </main>

      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default Layouts;
