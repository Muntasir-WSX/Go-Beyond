import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link ইম্পোর্ট করা হয়েছে
import {
  Menu,
  User,
  LogIn,
  UserPlus,
  Anchor,
  X,
  Home,
  Briefcase,
  Info
} from "lucide-react";

const Nav = () => {
  const [isUserOpen, setIsUserOpen] = useState(false);

  
  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "All Packages", path: "/packages", icon: <Briefcase size={18} /> },
    { name: "About Us", path: "/about-us", icon: <Info size={18} /> },
  ];

  return (
    <div className="drawer z-100">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <nav className="bg-[#1a1b2e] text-white px-6 py-4 flex items-center justify-between shadow-lg">
          
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer" className="btn btn-ghost btn-circle text-[#ff5e37]">
              <Menu size={24} />
            </label>
          </div>

          {/* Logo Section */}
          <Link to="/" className="flex items-center cursor-pointer group">
            <div className="p-2 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12 -mr-1">
              <Anchor size={22} className="text-[#ff5e37]" />
            </div>
            <h1 className="text-xl md:text-2xl font-black tracking-tighter leading-none">
              Go<span className="text-gray-400">Beyond</span>
            </h1>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-10 font-bold uppercase text-[12px] tracking-widest">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="hover:text-[#ff5e37] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions & User Dropdown */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsUserOpen(!isUserOpen)}
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all border border-gray-600 flex items-center justify-center"
              >
                <User size={20} />
              </button>

              {isUserOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsUserOpen(false)}></div>
                  <div className="absolute right-0 mt-3 w-48 bg-white text-gray-800 rounded-xl shadow-2xl py-2 border border-gray-100 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* রাউটার অনুযায়ী path="/signin" */}
                    <Link 
                      to="/signin" 
                      onClick={() => setIsUserOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <LogIn size={16} className="text-[#ff5e37]" />
                      <span className="font-bold text-sm">Login</span>
                    </Link>
                    {/* রাউটার অনুযায়ী path="/register" */}
                    <Link 
                      to="/register" 
                      onClick={() => setIsUserOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-t border-gray-50"
                    >
                      <UserPlus size={16} className="text-[#ff5e37]" />
                      <span className="font-bold text-sm">Register Now</span>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>

      {/* Drawer Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-6 w-80 min-h-full bg-[#1a1b2e] text-white">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
              <div className="mr-1">
                <Anchor size={24} className="text-[#ff5e37]" />
              </div>
              <span className="text-xl font-black tracking-tighter">
                 Go<span className="text-gray-400">Beyond</span>
              </span>
            </div>
            <label htmlFor="my-drawer" className="btn btn-ghost btn-circle text-gray-400">
              <X size={24} />
            </label>
          </div>

          <div className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className="flex items-center gap-4 py-4 px-4 rounded-xl hover:bg-[#ff5e37] hover:text-white transition-all text-lg font-medium group"
                >
                  <span className="text-[#ff5e37] group-hover:text-white">{link.icon}</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;