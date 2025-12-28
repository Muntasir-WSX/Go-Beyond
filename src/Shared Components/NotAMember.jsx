import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { UserPlus, LogIn, PlaneTakeoff, Anchor, Sparkles } from "lucide-react";

const NotAMember = () => {
  return (
    <section className="relative bg-[#f4f4f4] py-10 lg:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#1a1b2e]">
          <path d="M0,500 C200,400 300,600 500,500 C700,400 800,600 1000,500" stroke="currentColor" fill="transparent" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-4 text-center lg:text-left"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#ff5e37] font-bold uppercase tracking-widest text-[10px]">
                <Sparkles size={12} />
                <span>Start your journey</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-[#1a1b2e] leading-tight tracking-tighter">
                Not a Member <span className="text-[#ff5e37]">Yet?</span>
              </h2>
            </div>
            <p className="text-[#5a5a5a] text-sm md:text-base max-w-sm mx-auto lg:mx-0 leading-relaxed">
              Join <span className="text-[#1a1b2e] font-bold underline decoration-[#ff5e37]">Go Beyond</span>! Save up to <span className="text-[#ff5e37] font-bold">50%</span> on your next adventure.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link to="/signin" className="flex items-center gap-2 bg-[#ff5e37] text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wider text-[10px] shadow-md hover:bg-[#1a1b2e] transition-all active:scale-95">
                <LogIn size={14} /> Sign In
              </Link>
              <Link to="/register" className="flex items-center gap-2 bg-white text-[#1a1b2e] border border-[#1a1b2e]/10 px-6 py-3 rounded-lg font-bold uppercase tracking-wider text-[10px] hover:border-[#ff5e37] hover:text-[#ff5e37] transition-all active:scale-95">
                <UserPlus size={14} /> Register
              </Link>
            </div>
          </motion.div>

          {/* Right Visuals (Fixed Cross Position for Mobile/Tablet) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative flex justify-center items-center h-75 lg:h-100"
          >
            {/* Inner container to hold phones together */}
            <div className="relative w-full max-w-70 sm:max-w-[320px] h-full flex justify-center items-center">
              
              {/* Dark Phone (Left) */}
              <motion.div
                style={{ rotate: -12 }}
                className="absolute left-0 sm:left-4 w-28 h-52 sm:w-36 sm:h-64 bg-[#1a1b2e] rounded-3xl border-[5px] border-[#2a2b3e] shadow-2xl overflow-hidden flex flex-col items-center justify-center z-10"
              >
                <div className="absolute top-2.5 w-7 h-1 bg-gray-700 rounded-full"></div>
                <div className="text-white flex flex-col items-center gap-2">
                  <Anchor size={24} className="text-[#ff5e37]" />
                  <span className="font-bold text-[8px] sm:text-[10px] tracking-tighter uppercase">Go Beyond</span>
                </div>
              </motion.div>

              {/* Orange Phone (Right - Crossed over) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ rotate: 8 }}
                className="absolute right-0 sm:right-4 w-28 h-52 sm:w-36 sm:h-64 bg-[#ff5e37] rounded-3xl border-[5px] border-white shadow-2xl overflow-hidden flex flex-col items-center justify-center z-20"
              >
                <div className="absolute top-2.5 w-7 h-1 bg-white/40 rounded-full"></div>
                <div className="text-white flex flex-col items-center gap-2 text-center">
                  <div className="bg-white p-1.5 rounded-lg shadow-sm">
                    <PlaneTakeoff size={20} className="text-[#ff5e37]" />
                  </div>
                  <span className="font-black text-[8px] sm:text-[10px] tracking-tighter uppercase leading-none">Go Beyond</span>
                </div>
              </motion.div>

              {/* Glow Effect */}
              <div className="absolute w-40 h-40 bg-[#ff5e37] opacity-10 blur-[80px] rounded-full"></div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default NotAMember;