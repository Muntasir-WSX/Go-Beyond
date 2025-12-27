import React from "react";
import { motion } from "framer-motion";

// ইম্পোর্ট করা ইমেজগুলো
import bandarban from "../../assets/bandarban.jpg";
import coxBazar from "../../assets/cox bazar.jpg";
import sajek from "../../assets/sajek.jpg";
import kaptai from "../../assets/kaptai.jpg";
import saintMartin from "../../assets/saint martin.jpg";

const DestinationGrid = () => {
  const destinations = [
    { name: "Bandarban", img: bandarban },
    { name: "Cox's Bazar", img: coxBazar },
    { name: "Sajek Valley", img: sajek },
    { name: "Kaptai Lake", img: kaptai },
    { name: "Saint Martin", img: saintMartin },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-10 text-left">
        <h4
          className="text-[#ff5e37] font-serif italic text-xl mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our destination lists
        </h4>
        <h2 className="text-3xl md:text-4xl font-black text-[#1a1b2e] leading-tight tracking-tight uppercase">
          Checkout Beautiful <br /> Places Around The World
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {destinations.map((dest, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-xl h-75 cursor-pointer group shadow-md"
          >
            <div className="w-full h-full overflow-hidden">
              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

            <div className="absolute bottom-5 left-6 z-10">
              <h3 className="text-white text-2xl font-bold tracking-tight group-hover:text-[#ff5e37] transition-colors duration-300">
                {dest.name}
              </h3>
            </div>

            {/* Link Overlay */}
            <a href="/packages" className="absolute inset-0 z-20"></a>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#ff5e37] rounded-xl h-75 flex flex-col items-center justify-center p-6 text-center text-white shadow-lg overflow-hidden relative group"
        >
          <span className="uppercase tracking-[0.2em] font-bold text-[10px] mb-3 opacity-90">
            Up to 30% Off
          </span>
          <h2
            className="text-4xl font-serif italic mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Summer <br /> hot deals
          </h2>
          <button className="bg-white text-black px-6 py-2.5 rounded-lg font-bold text-[11px] uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 relative z-10">
            View Deals
          </button>

          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationGrid;
