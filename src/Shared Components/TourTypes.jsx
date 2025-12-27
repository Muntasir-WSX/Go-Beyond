import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ship, Binoculars } from "lucide-react";
import { GiDeer, GiMountainClimbing, GiMountaintop,} from "react-icons/gi";
import { FaDraftingCompass, FaUmbrellaBeach } from "react-icons/fa";

const TourTypes = () => {

  const [activeTab, setActiveTab] = useState("Adventure");

  const tourCategories = [
    { id: 1, name: "Adventure", icon: <FaDraftingCompass size={40} />, count: 12 },
    { id: 2, name: "Mountain", icon: <GiMountaintop size={40} />, count: 10 },
    { id: 3, name: "Beach", icon: <FaUmbrellaBeach size={40} />, count: 20 },
    { id: 4, name: "Sightseeing", icon: <Binoculars size={40} />, count: 15 },
    { id: 5, name: "Cruising", icon: <Ship size={40} />, count: 5 },
    { id: 6, name: "Wildlife", icon: <GiDeer size={40} />, count: 8 },
    { id: 7, name: "Expedition", icon: <GiMountainClimbing size={40} />, count: 6 },
  ];

  const tabMessages = {
    Adventure: {
      title: "Thrilling Adventure Awaits!",
      desc: "Experience trekking in Bandarban hilly areas or boat ride between shangu trail.",
      locations: "Bandarban, Keokradong",
    },
    Mountain: {
      title: "Escape to the Peaks",
      desc: "Explore the misty hills of Nilgiri and the heights of Rangamati.",
      locations: "Nilgiri, Nilachal, Rangamati",
    },
    Beach: {
      title: "Sun, Sand & Relaxation",
      desc: "Chill at the world's longest sea beach or explore the blue waters of Saint Martin.",
      locations: "Cox's Bazar, Saint Martin, Inani",
    },
    Sightseeing: {
      title: "Explore Beautiful Landmarks",
      desc: "Discover the serenity of Kaptai Lake and the scenic beauty of Rangamati resorts.",
      locations: "Kaptai Lake , Rangamati ",
    },
    Cruising: {
      title: "Sail Across the Blue",
      desc: "Enjoy a luxury cruise to Saint Martin or a speed boat trip in shonadia .",
      locations: "Saint Martin Sea-Truck, Shonadia Trip",
    },
    Wildlife: {
      title: "Meet the Nature",
      desc: "Experience the flora and fauna of the wildlife and reserve forests.",
      locations: "Dulhazara Safari Park, Chunati Reserve Forests",
    },
    Expedition: {
      title: "Grand Cultural Expeditions",
      desc: "Deep dive into the tribal cultures and remote landscapes of Chittagong Division.",
      locations: "Thanchi, Alikadam, Amiakhum",
    },
  };

  return (
    <section className="bg-[#f9f7f2] py-20 px-6 overflow-hidden relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img
          src="https://www.transparenttextures.com/patterns/world-map.png"
          alt="map"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#ff5e37] font-serif italic text-2xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Find the best tour
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-5xl font-black text-[#1a1b2e] mt-2 uppercase tracking-tight"
          >
            Avaiable Trips 
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {tourCategories.map((type) => (
            <motion.div
              key={type.id}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(type.name)}
              className={`cursor-pointer w-36 h-44 lg:w-40 lg:h-48 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300
                                ${
                                  activeTab === type.name
                                    ? "bg-[#ff5e37] text-white shadow-xl shadow-[#ff5e37]/30"
                                    : "bg-white text-[#1a1b2e] shadow-sm hover:shadow-md"
                                }`}
            >
              <div
                className={`${
                  activeTab === type.name ? "text-white" : "text-[#ff5e37]"
                }`}
              >
                {type.icon}
              </div>
              <h3 className="font-black text-xs lg:text-sm uppercase tracking-wider text-center px-2">
                {type.name}
              </h3>
              <span
                className={`text-[10px] font-bold px-2 py-1 rounded-full 
                                ${
                                  activeTab === type.name
                                    ? "bg-white/20"
                                    : "bg-gray-100"
                                }`}
              >
                {type.count} Tours
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 min-h-30">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h3 className="text-2xl lg:text-3xl font-black text-[#1a1b2e] uppercase tracking-tight">
                {tabMessages[activeTab].title}
              </h3>
              <p className="text-gray-600 mt-3 text-base lg:text-lg italic">
                "{tabMessages[activeTab].desc}"
              </p>
              <div className="mt-4 inline-block bg-[#ff5e37]/10 text-[#ff5e37] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                Destinations: {tabMessages[activeTab].locations}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TourTypes;
