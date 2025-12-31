import React from "react";
import { motion } from "framer-motion";
import { Bus, Plane, Ship, ShieldCheck } from "lucide-react";

const Partners = () => {
  const partnerList = [
    { name: "Sky Drift", type: "Air", icon: <Plane size={20} />, color: "bg-blue-50 text-blue-600", iconBg: "bg-blue-600" },
    { name: "Urban Wave", type: "Bus", icon: <Bus size={20} />, color: "bg-emerald-50 text-emerald-600", iconBg: "bg-emerald-600" },
    { name: "Ocean Glide", type: "Ship", icon: <Ship size={20} />, color: "bg-amber-50 text-amber-600", iconBg: "bg-amber-600" },
    { name: "Cloud Hopper", type: "Air", icon: <Plane size={20} />, color: "bg-indigo-50 text-indigo-600", iconBg: "bg-indigo-600" },
    { name: "Route Master", type: "Bus", icon: <Bus size={20} />, color: "bg-rose-50 text-rose-600", iconBg: "bg-rose-600" },
    { name: "Deep Sea Lux", type: "Ship", icon: <Ship size={20} />, color: "bg-cyan-50 text-cyan-600", iconBg: "bg-cyan-600" },
    { name: "Aero Swift", type: "Air", icon: <Plane size={20} />, color: "bg-violet-50 text-violet-600", iconBg: "bg-violet-600" },
    { name: "Nomad Express", type: "Bus", icon: <Bus size={20} />, color: "bg-teal-50 text-teal-600", iconBg: "bg-teal-600" },
  ];

  const duplicatedPartners = [...partnerList, ...partnerList];

  return (
    <section className="relative bg-[#ff5e37] py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10 text-center">
        <div className="flex flex-col items-center justify-center gap-1">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-white/80 font-bold uppercase tracking-[0.25em] text-[10px]"
          >
            <ShieldCheck size={14} />
            <span>Verified Network</span>
          </motion.div>
          <h3 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter">
            Official <span className="text-[#1a1b2e]">Partners</span>
          </h3>
          <div className="w-12 h-1 bg-[#1a1b2e] mt-2 rounded-full"></div>
        </div>
      </div>

      {/* Infinite Slider */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-5 whitespace-nowrap px-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 ${partner.color} pl-4 pr-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 border-b-4 border-black/10`}
            >
              {/* Icon Container with Dynamic Background */}
              <div className={`${partner.iconBg} text-white p-3 rounded-xl shadow-lg`}>
                {partner.icon}
              </div>

              <div className="flex flex-col">
                <h4 className="font-black text-[#1a1b2e] text-base tracking-tight leading-none uppercase">
                  {partner.name}
                </h4>
                <span className="text-[9px] opacity-70 font-black uppercase tracking-widest mt-2">
                  {partner.type} Logistics
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays for smooth fading effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#ff5e37] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#ff5e37] to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#1a1b2e] opacity-20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Partners;