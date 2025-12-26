import React from "react";
import { TreePalmIcon, Phone, Mail, MapPin, Check, Anchor } from "lucide-react";

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
  phone: "+880 1711 000000",
  email: "hello@gobeyond-ctg.com",
  address: "GEC Circle, CDA Avenue, Chittagong, Bangladesh",
};

const Footer = () => {
  return (
    <footer className="bg-[#1a1b2e] text-white pt-16 pb-8 px-10 relative overflow-hidden">
      {/* 🗺️ Background Google Map Overlay */}
      <div className="absolute right-0 top-0 h-full w-full lg:w-1/2 opacity-10 pointer-events-none z-0">
        <iframe
          title="Chittagong Map"
          width="100%"
          height="100%"
          frameBorder="0"
          src="https://maps.google.com/maps?q=GEC%20Circle%2C%20Chittagong&t=&z=13&ie=UTF8&iwloc=&output=embed"
          style={{ filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
        ></iframe>
        {/* Gradient overlay to blend the map into the background color */}
        <div className="absolute inset-0 bg-linear-to-r from-[#1a1b2e] via-[#1a1b2e]/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* 1. Logo & Contact Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="bg-[#ff5e37] p-2 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
              <Anchor size={20} className="text-white fill-current" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">
              Go <span className="text-gray-400">Beyond</span>
            </h1>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Discover the hidden gems of Chittagong and beyond. Your journey
            starts here.
          </p>
          <div className="space-y-3 pt-4 border-t border-gray-700">
            <div className="flex items-center gap-3 text-gray-300">
              <Phone size={18} className="text-[#ff5e37]" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Mail size={18} className="text-[#ff5e37]" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin size={18} className="text-[#ff5e37]" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>

        {/* 2. Company Links (Mapped) */}
        <div>
          <h3 className="text-xl font-bold mb-6">Company</h3>
          <ul className="space-y-4">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-400 hover:text-[#ff5e37] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Explore Links (Mapped) */}
        <div>
          <h3 className="text-xl font-bold mb-6">Explore</h3>
          <ul className="space-y-4">
            {exploreLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-400 hover:text-[#ff5e37] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Newsletter Section */}
        <div>
          <h3 className="text-xl font-bold mb-6">Newsletter</h3>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-[#242538] border-none rounded-md py-3 px-4 focus:ring-2 focus:ring-[#ff5e37] outline-none text-sm text-white"
            />
            <button className="w-full bg-[#ff5e37] hover:bg-[#e54e2b] text-white font-bold py-3 rounded-md transition-all uppercase tracking-wider text-sm shadow-lg shadow-orange-500/20">
              Subscribe
            </button>
            <div className="flex items-start gap-2 pt-2">
              <div className="mt-1 flex items-center justify-center border border-gray-500 rounded-sm w-4 h-4">
                <Check size={10} className="text-gray-400" />
              </div>
              <p className="text-xs text-gray-400">
                I agree to all terms and policies
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Go Beyond Chittagong. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
