import React from "react";
import { motion } from "framer-motion";
import { Bus, Plane, Ship, ShieldCheck } from "lucide-react";

const Partners = () => {
  const partnerList = [
    { name: "Sky Drift", type: "Air", icon: <Plane size={20} /> },
    { name: "Urban Wave", type: "Bus", icon: <Bus size={20} /> },
    { name: "Ocean Glide", type: "Ship", icon: <Ship size={20} /> },
    { name: "Cloud Hopper", type: "Air", icon: <Plane size={20} /> },
    { name: "Route Master", type: "Bus", icon: <Bus size={20} /> },
    { name: "Deep Sea Lux", type: "Ship", icon: <Ship size={20} /> },
    { name: "Aero Swift", type: "Air", icon: <Plane size={20} /> },
    { name: "Nomad Express", type: "Bus", icon: <Bus size={20} /> },
  ];

  const duplicatedPartners = [...partnerList, ...partnerList];

  return (
    <section className="relative bg-[#ff5e37] py-12 lg:py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 relative z-10 text-center">
        <div className="flex flex-col items-center justify-center gap-1">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-white/90 font-bold uppercase tracking-[0.25em] text-[10px]"
          >
            <ShieldCheck size={14} />
            <span>Trusted Network</span>
          </motion.div>
          <h3 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter">
            Official <span className="text-[#1a1b2e]">Partners</span>
          </h3>
          <div className="w-12 h-1 bg-[#1a1b2e] mt-2 rounded-full"></div>
        </div>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white px-6 py-5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-300"
            >
              <div className="text-white bg-[#1a1b2e] p-2.5 rounded-xl shadow-md">
                {partner.icon}
              </div>

              <div className="flex flex-col">
                <h4 className="font-black text-[#1a1b2e] text-base tracking-tight leading-none uppercase">
                  {partner.name}
                </h4>
                <span className="text-[10px] text-[#ff5e37] font-extrabold uppercase tracking-widest mt-1.5">
                  {partner.type} partner
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#ff5e37] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#ff5e37] to-transparent z-10 pointer-events-none"></div>
      </div>

      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#1a1b2e] opacity-20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Partners;
