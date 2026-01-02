import React from "react";
import { motion } from "framer-motion";
import { Bus, Plane, Ship, ShieldCheck } from "lucide-react";

const Partners = () => {
  const partnerList = [
    {
      name: "Sky Drift",
      type: "Air",
      icon: <Plane size={20} />,
      color: "bg-white text-gray-700",
      iconBg: "bg-orange-500",
    },
    {
      name: "Urban Wave",
      type: "Bus",
      icon: <Bus size={20} />,
      color: "bg-white text-gray-700",
      iconBg: "bg-orange-500",
    },
    {
      name: "Ocean Glide",
      type: "Ship",
      icon: <Ship size={20} />,
      color: "bg-white text-gray-700",
      iconBg: "bg-orange-500",
    },
    {
      name: "Cloud Hopper",
      type: "Air",
      icon: <Plane size={20} />,
      color: "bg-white text-gray-700",
      iconBg: "bg-orange-500",
    },
    {
      name: "Route Master",
      type: "Bus",
      icon: <Bus size={20} />,
      color: "bg-white text-gray-700",
      iconBg: "bg-orange-500",
    },
    {
      name: "Deep Sea Lux",
      type: "Ship",
      icon: <Ship size={20} />,
      color: "bg-white text-gray-700",
      iconBg: "bg-orange-500",
    },
    {
      name: "Aero Swift",
      type: "Air",
      icon: <Plane size={20} />,
      color: "bg-white text-gray-700",
      iconBg: "bg-orange-500",
    },
    {
      name: "Nomad Express",
      type: "Bus",
      icon: <Bus size={20} />,
      color: "bg-white text-gray-700",
      iconBg: "bg-orange-500",
    },
  ];

  const duplicatedPartners = [...partnerList, ...partnerList];

  return (
    <section className="relative bg-gray-50 py-16 lg:py-24 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 text-center">
        <div className="flex flex-col items-center justify-center gap-1">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-[#ff5e37] font-bold uppercase tracking-[0.25em] text-[10px]"
          >
            <ShieldCheck size={14} />
            <span>Verified Network</span>
          </motion.div>

          <h3 className="text-3xl lg:text-4xl font-black text-[#1a1b2e] uppercase tracking-tighter">
            Official <span className="text-[#ff5e37]">Partners</span>
          </h3>

          <div className="w-16 h-1 bg-[#ff5e37] mt-3 rounded-full"></div>

          <p className="text-gray-500 text-sm mt-4 font-medium max-w-sm mx-auto">
            Trusted by the world's leading travel and logistics companies
          </p>
        </div>
      </div>
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-8 whitespace-nowrap px-8"
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
              className={`flex items-center gap-5 bg-white pl-4 pr-10 py-5 rounded-2xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-xl transition-all duration-300 border border-gray-100 group`}
            >
              <div className="bg-[#1a1b2e] group-hover:bg-[#ff5e37] text-white p-3.5 rounded-xl shadow-md transition-colors duration-300">
                {partner.icon}
              </div>

              <div className="flex flex-col">
                <h4 className="font-bold text-[#1a1b2e] text-lg tracking-tight leading-none">
                  {partner.name}
                </h4>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">
                  {partner.type} Logistics
                </span>
              </div>
            </div>
          ))}
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
    </section>
  );
};

export default Partners;
