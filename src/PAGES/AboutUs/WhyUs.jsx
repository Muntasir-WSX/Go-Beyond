import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Globe, Clock, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Safety First",
    desc: "Your safety is our top priority with verified stays and expert guides.",
  },
  {
    icon: <Globe size={32} />,
    title: "Local Expertise",
    desc: "Deep knowledge of Chittagong's hidden gems and beyond.",
  },
  {
    icon: <Clock size={32} />,
    title: "24/7 Support",
    desc: "We are always with you, from booking until you return home.",
  },
  {
    icon: <HeartHandshake size={32} />,
    title: "Personalized",
    desc: "Customized itineraries tailored specifically to your preferences.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-24 bg-[#1a1b2e] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/topography.png')`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-1/3 space-y-6">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#ff5e37] font-bold italic text-lg lg:text-xl block"
              style={{ fontFamily: "cursive" }}
            >
              Why GoBeyond?
            </motion.span>
            <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight tracking-tighter uppercase">
              We Provide the <br />
              <span className="text-[#ff5e37]">Best Experience</span>
            </h2>
            <p className="text-gray-400 font-medium">
              We don't just sell tickets; we create memories that last a
              lifetime through our dedicated services.
            </p>
            <div className="pt-4">
              <button className="bg-[#ff5e37] hover:bg-white hover:text-[#1a1b2e] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all duration-300">
                View Packages
              </button>
            </div>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-[#ff5e37] transition-all duration-500 group"
              >
                <div className="text-[#ff5e37] group-hover:text-white mb-4 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 group-hover:text-white/90 text-sm leading-relaxed transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
