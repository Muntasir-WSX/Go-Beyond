import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom"; // NavLink ইম্পোর্ট করা হয়েছে
import {
  Menu,
  User,
  LogIn,
  UserPlus,
  Anchor,
  X,
  Home,
  Briefcase,
  Info,
  PlusCircle,
  Settings,
  BookmarkCheck,
  LogOut,
} from "lucide-react";
import { AuthContext } from "../Context/AuthProvider";

const Nav = () => {
  const [isUserOpen, setIsUserOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "All Packages", path: "/packages", icon: <Briefcase size={18} /> },
    { name: "About Us", path: "/about-us", icon: <Info size={18} /> },
  ];

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setIsUserOpen(false);
      })
      .catch((error) => console.error(error));
  };

  // একটি কমন ফাংশন অ্যাক্টিভ ক্লাসের জন্য
  const getActiveLinkClass = ({ isActive }) =>
    isActive 
      ? "text-[#ff5e37] transition-colors" 
      : "hover:text-[#ff5e37] transition-colors text-white";

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

          {/* Navigation Links - Desktop (Active Logic Added) */}
          <div className="hidden lg:flex items-center gap-10 font-bold uppercase text-[12px] tracking-widest">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className={getActiveLinkClass}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* User Profile Section */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsUserOpen(!isUserOpen)}
                className="w-10 h-10 rounded-full overflow-hidden hover:ring-2 hover:ring-[#ff5e37] transition-all border border-gray-600 flex items-center justify-center bg-gray-800"
              >
                {user && user.photoURL ? (
                  <img src={user.photoURL} alt="User" className="w-full h-full object-cover" />
                ) : (
                  <User size={20} className="text-white" />
                )}
              </button>

              {isUserOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsUserOpen(false)}></div>
                  <div className="absolute right-0 mt-3 w-56 bg-white text-gray-800 rounded-xl shadow-2xl py-3 border border-gray-100 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                    
                    {user ? (
                      <div className="space-y-1">
                        <div className="px-4 py-2 border-b border-gray-100 mb-2">
                           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Signed in as</p>
                           <p className="font-black text-sm text-[#1a1b2e] truncate">{user.displayName || 'Guest'}</p>
                           <p className="text-[10px] text-gray-500 truncate">{user.email}</p>
                        </div>

                        <Link to="/add-package" onClick={() => setIsUserOpen(false)} className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors font-bold text-xs uppercase tracking-tight text-gray-700">
                          <PlusCircle size={16} className="text-[#ff5e37]" /> Add Package
                        </Link>
                        
                        <Link to="/manage-packages" onClick={() => setIsUserOpen(false)} className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors font-bold text-xs uppercase tracking-tight text-gray-700">
                          <Settings size={16} className="text-[#ff5e37]" /> Manage My Packages
                        </Link>

                        <Link to="/my-bookings" onClick={() => setIsUserOpen(false)} className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors font-bold text-xs uppercase tracking-tight text-gray-700">
                          <BookmarkCheck size={16} className="text-[#ff5e37]" /> My Bookings
                        </Link>

                        <div className="border-t border-gray-100 mt-2 pt-2">
                          <button 
                            onClick={handleLogOut}
                            className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-red-50 transition-colors font-black text-xs uppercase tracking-tight text-red-500"
                          >
                            <LogOut size={16} /> Logout
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <Link to="/signin" onClick={() => setIsUserOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors">
                          <LogIn size={16} className="text-[#ff5e37]" />
                          <span className="font-bold text-sm">Login</span>
                        </Link>
                        <Link to="/register" onClick={() => setIsUserOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-t border-gray-50">
                          <UserPlus size={16} className="text-[#ff5e37]" />
                          <span className="font-bold text-sm">Register Now</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>

      {/* Drawer Sidebar (Active Logic for Mobile) */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-6 w-80 min-h-full bg-[#1a1b2e] text-white">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
              <Anchor size={24} className="text-[#ff5e37] mr-1" />
              <span className="text-xl font-black tracking-tighter">Go<span className="text-gray-400">Beyond</span></span>
            </div>
            <label htmlFor="my-drawer" className="btn btn-ghost btn-circle text-gray-400">
              <X size={24} />
            </label>
          </div>

          <div className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => 
                    `flex items-center gap-4 py-4 px-4 rounded-xl transition-all text-lg font-medium group ${
                      isActive ? "bg-[#ff5e37] text-white" : "hover:bg-gray-800"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className={`${isActive ? "text-white" : "text-[#ff5e37]"} group-hover:text-white`}>
                        {link.icon}
                      </span>
                      {link.name}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;