import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Compass } from "lucide-react";
import naval from "../assets/naval-2.jpg";

const ErrorPage = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={naval}
          alt="Himalayan Mist"
          className="w-full h-full object-cover scale-110"
        />

        <div className="absolute inset-0 bg-[#1a1b2e]/70 backdrop-blur-[4px]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mb-6 flex justify-center"
          >
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Compass
                size={60}
                className="text-[#ff5e37] animate-[spin_10s_linear_infinite]"
              />
            </div>
          </motion.div>

          <h1 className="text-[100px] md:text-[180px] font-black text-transparent bg-clip-text bg-linear-to-b from-white to-white/10 leading-none tracking-tighter">
            404
          </h1>

          <h2 className="text-2xl md:text-5xl font-black text-white uppercase mt-4 tracking-tighter leading-tight">
            Oops! You seem lost <br />
            <span className="text-[#ff5e37] font-serif italic lowercase">
              in the
            </span>{" "}
            Himalayas.
          </h2>

          <p className="text-gray-300 mt-6 max-w-lg mx-auto text-sm md:text-lg leading-relaxed font-light">
            Even the best explorers take a wrong turn sometimes. <br />
            Let’s get you back to the base camp.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-[#ff5e37] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-[#ff5e37] transition-all duration-500 shadow-[0_10px_40px_rgba(255,94,55,0.3)]"
            >
              <Home size={18} />
              Back to Home Base
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-64 bg-linear-to-t from-[#1a1b2e] to-transparent opacity-80"></div>

      <div className="absolute top-20 left-20 w-32 h-32 bg-[#ff5e37] blur-[120px] opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500 blur-[120px] opacity-20"></div>
    </section>
  );
};

export default ErrorPage;
