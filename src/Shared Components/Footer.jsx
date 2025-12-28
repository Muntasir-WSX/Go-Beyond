import React from "react";
import { Link } from "react-router-dom"; // Link ইম্পোর্ট করা হয়েছে
import { Phone, Mail, MapPin, Check, Anchor, Facebook, Instagram, Twitter } from "lucide-react";

const companyLinks = [
  "About Us",
  "Community Blog",
  "Rewards",
  "Work with Us",
  "Contact",
];

const exploreLinks = [
  "Account",
  "Privacy Policy",
  "Affiliate Program",
  "Our Partner",
  "Events",
];

const contactInfo = {
  phone: "+880 1960551472",
  email: "hello@gobeyond-ctg.com",
  address: "GEC Circle, CDA Avenue, Chattogram, BD",
};

const Footer = () => {
  return (
    <footer className="bg-[#1a1b2e] text-white pt-16 pb-8 px-6 lg:px-10 relative overflow-hidden">
      
      {/* Background Google Map Overlay */}
      <div className="absolute right-0 top-0 h-full w-full lg:w-1/2 opacity-[0.03] pointer-events-none z-0">
        <iframe
          title="Chittagong Map"
          width="100%"
          height="100%"
          frameBorder="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.873523577713!2d91.8213645!3d22.3583944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd89945037d4d%3A0x6330769b76b91c8!2sGEC%20Circle!5e0!3m2!1sen!2sbd!4v1700000000000"
          style={{ filter: "grayscale(1) invert(1)" }}
        ></iframe>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* 1. Logo & Contact Section */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center cursor-pointer group">
            <div className="p-2 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12 -ml-2">
              <Anchor size={24} className="text-[#ff5e37]" />
            </div>
            <h2 className="text-2xl font-black tracking-tighter leading-none">
              Go<span className="text-gray-400">Beyond</span>
            </h2>
          </Link>
          
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Discover the hidden gems of Chittagong and beyond. Your premium 
            journey starts with us.
          </p>

          <div className="space-y-4 pt-4 border-t border-gray-800">
            <div className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#ff5e37] transition-colors cursor-pointer">
              <Phone size={16} className="text-[#ff5e37]" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#ff5e37] transition-colors cursor-pointer">
              <Mail size={16} className="text-[#ff5e37]" />
              <span className="break-all">{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300 leading-snug">
              <MapPin size={16} className="text-[#ff5e37] shrink-0" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>

        {/* 2. Company Links (Modified Logic) */}
        <div>
          <h3 className="text-lg font-black uppercase tracking-widest mb-8 text-white">Company</h3>
          <ul className="space-y-4">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link === "About Us" ? "/about-us" : "/"}
                  className="text-gray-400 hover:text-[#ff5e37] font-bold text-sm transition-all hover:pl-2"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Explore Links (All pointed to /) */}
        <div>
          <h3 className="text-lg font-black uppercase tracking-widest mb-8 text-white">Explore</h3>
          <ul className="space-y-4">
            {exploreLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#ff5e37] font-bold text-sm transition-all hover:pl-2"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Newsletter Section */}
        <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/50">
          <h3 className="text-lg font-black uppercase tracking-widest mb-4">Newsletter</h3>
          <p className="text-xs text-gray-400 mb-4 font-medium">Subscribe for exclusive travel deals!</p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-[#1a1b2e] border border-gray-700 rounded-xl py-3 px-4 focus:ring-1 focus:ring-[#ff5e37] outline-none text-sm text-white transition-all"
            />
            <button className="w-full bg-[#ff5e37] hover:bg-[#1a1b2e] border border-[#ff5e37] text-white font-black py-3 rounded-xl transition-all uppercase tracking-tighter text-xs shadow-lg shadow-orange-500/10 active:scale-95">
              Join Now
            </button>
            <div className="flex items-start gap-2 pt-2">
              <Check size={12} className="text-[#ff5e37] mt-0.5" />
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">
                I agree to all terms
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar & Socials */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500 text-center md:text-left">
          © {new Date().getFullYear()} Go Beyond. Built for Explorers.
        </p>
        
        {/* Social Icons */}
        <div className="flex items-center gap-5 text-gray-400">
           <Facebook size={18} className="hover:text-[#ff5e37] cursor-pointer transition-colors" />
           <Instagram size={18} className="hover:text-[#ff5e37] cursor-pointer transition-colors" />
           <Twitter size={18} className="hover:text-[#ff5e37] cursor-pointer transition-colors" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;