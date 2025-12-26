import React, { useState } from "react";
// Plane icon for the logo, User/Search for actions
import {
  Plane,
  Search,
  User,
  LogIn,
  UserPlus,
  ShieldCheck,
  TreePalm,
  TreePalmIcon,
  Anchor,
} from "lucide-react";

const Nav = () => {
  const [isUserOpen, setIsUserOpen] = useState(false);

  return (
    <nav className="bg-[#1a1b2e] text-white px-8 py-4 flex items-center justify-between shadow-lg relative z-50">
      {/* 1. Logo Section ✈️ */}
      <div className="flex items-center gap-2 cursor-pointer group">
        <div className="bg-[#ff5e37] p-2 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
          <Anchor size={20} className="text-white fill-current" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">
          Go <span className="text-gray-400">Beyond</span>
        </h1>
      </div>

      {/* 2. Navigation Links (Simple Routes) 🔗 */}
      <div className="hidden md:flex items-center gap-10 font-medium">
        <a href="/" className="hover:text-[#ff5e37] transition-colors">
          Home
        </a>
        <a href="/packages" className="hover:text-[#ff5e37] transition-colors">
          All Packages
        </a>
        <a href="/about" className="hover:text-[#ff5e37] transition-colors">
          About Us
        </a>
      </div>

      {/* 3. Actions & User Dropdown 👤 */}
      <div className="flex items-center gap-6">
        <div className="relative">
          <button
            onClick={() => setIsUserOpen(!isUserOpen)}
            className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all border border-gray-600 flex items-center justify-center"
          >
            <User size={20} />
          </button>

          {/* User Dropdown Menu */}
          {isUserOpen && (
            <>
              {/* Invisible backdrop to close dropdown when clicking away */}
              <div
                className="fixed inset-0 z-[-1]"
                onClick={() => setIsUserOpen(false)}
              ></div>

              <div className="absolute right-0 mt-3 w-48 bg-white text-gray-800 rounded-md shadow-xl py-2 border border-gray-200 animate-in fade-in slide-in-from-top-2 duration-200">
                <a
                  href="/login"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  <LogIn size={16} className="text-gray-500" />
                  <span className="font-medium">Login</span>
                </a>
                <a
                  href="/register"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition-colors border-t border-gray-100"
                >
                  <UserPlus size={16} className="text-gray-500" />
                  <span className="font-medium">Register</span>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
