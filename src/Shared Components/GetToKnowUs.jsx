import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Tourist from "../assets/Tourist.jpg";

const GetToKnowUs = () => {
  const features = [
    "Trust and Safety",
    "Easy & Quick Booking",
    "Best Price Guarantee",
    "Best Travel Agents",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2"
        >
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-3xl">
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
                src={Tourist}
                alt="Explore the world"
                className="w-full h-auto aspect-4/3 object-cover"
              />
            </div>

            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#ff5e37] rounded-tl-3xl z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#ff5e37] rounded-br-3xl z-0"></div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="absolute -bottom-6 left-10 z-20 bg-[#ff5e37] text-white p-5 rounded-2xl shadow-xl hidden md:block"
            >
              <span className="text-3xl font-black block leading-none">
                6+
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest">
                Years Experience
              </span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 space-y-7"
        >
          <div className="space-y-4">
            <motion.h4
              className="text-[#ff5e37] font-serif italic text-2xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get to know us
            </motion.h4>

            <h2 className="text-4xl lg:text-6xl font-black text-[#1a1b2e] leading-[1.1] uppercase tracking-tighter">
              We're World-Class <br /> Travel Agency
            </h2>
          </div>

          <div className="space-y-4">
            <h5 className="text-[#ff5e37] font-extrabold text-xl">
              "Change your place to get fresh air"
            </h5>

            <p className="text-gray-500 leading-relaxed text-base lg:text-lg">
              Discover the world like never before with{" "}
              <span className="font-bold text-[#1a1b2e]">Go Beyond</span>. We
              take you past the tourist trails to experience the authentic
              heartbeat of every destination. Professional guides and unbeatable
              prices are just a click away.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="bg-[#ff5e37]/10 p-1 rounded-full">
                  <CheckCircle2 className="text-[#ff5e37]" size={20} />
                </div>
                <span className="font-bold text-[#1a1b2e] text-sm uppercase tracking-tight">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          {/* বাটন */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="pt-4"
          >
            <Link
              to="/about-us"
              className="inline-flex items-center gap-4 bg-[#ff5e37] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#1a1b2e] transition-all duration-300 shadow-lg shadow-[#ff5e37]/25"
            >
              know About Us <span className="text-lg">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetToKnowUs;
