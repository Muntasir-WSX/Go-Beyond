import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// Image Assets
import bandarban from "../../assets/bandarban.jpg";
import coxBazar from "../../assets/cox bazar.jpg";
import sajek from "../../assets/sajek.jpg";
import kaptai from "../../assets/kaptai.jpg";
import saintMartin from "../../assets/saint martin.jpg";
import naval2 from "../../assets/naval-2.jpg";
import rangamati from "../../assets/rangamati.jpg";

// Component Imports
import FacilityHome from "./FacilityHome";
import StatsHome from "./StatsHome";
import DestinationGrid from "./DestinationGrid";
import GetToKnowUs from "../../Shared Components/GetToKnowUs";
import TourTypes from "../../Shared Components/TourTypes";

const Home = () => {
  const navigate = useNavigate();

  const slides = [
    { img: bandarban, title: "Adventure Awaits in Bandarban", desc: "Experience the majestic hills and clouds of the Chittagong Hill Tracts." },
    { img: coxBazar, title: "Relax at Cox's Bazar", desc: "Unwind on the world's longest natural sandy sea beach." },
    { img: sajek, title: "Escape to Sajek Valley", desc: "The cottage in the clouds is calling for your next getaway." },
    { img: saintMartin, title: "Crystal Waters of Saint Martin", desc: "Explore the only coral island in Bangladesh." },
    { img: kaptai, title: "Serenity of Kaptai Lake", desc: "Boat rides and peaceful sunsets in the heart of Rangamati." },
    { img: naval2, title: "Evening Vibes at Naval Port", desc: "Enjoy the refreshing breeze and harbor views of Chittagong." },
    { img: rangamati, title: "Culture & Nature of Rangamati", desc: "Discover the tribal heritage and hanging bridges." },
  ];

  return (
    <main className="relative min-h-screen font-sans bg-white overflow-x-hidden">
      {/* 1. Hero Slider Section */}
      <section className="relative h-[85vh] w-full">
        <div className="absolute inset-0 overflow-hidden"> 
          <Swiper
            modules={[Autoplay, EffectFade, Navigation]}
            effect={"fade"}
            speed={1500}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="h-full w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative h-full w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
                  style={{ backgroundImage: `url(${slide.img})` }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative z-10 text-center px-6 max-w-5xl mb-12">
                    <motion.div 
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="mb-6 flex flex-col items-center"
                    >
                      <span className="text-[#ff5e37] font-serif italic text-2xl md:text-3xl tracking-wide mb-2 block">
                        ~ Traveling with ~
                      </span>
                      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-1 rounded-full border border-white/20 shadow-lg">
                        <span className="text-white text-xl font-light tracking-[0.3em] uppercase">
                          Go <span className="text-[#ff5e37] font-bold">Beyond</span>
                        </span>
                      </div>
                    </motion.div>

                    <motion.h1 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      className="text-white text-4xl md:text-6xl lg:text-6xl font-black mb-6 uppercase drop-shadow-2xl leading-tight"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="text-gray-200 text-lg md:text-2xl italic font-medium max-w-3xl mx-auto drop-shadow-md mb-8"
                    >
                      "{slide.desc}"
                    </motion.p>

                    <div className="lg:hidden">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/packages")}
                        className="bg-[#ff5e37] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest shadow-xl"
                      >
                        View All Packages
                      </motion.button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 📍 Search Bar (Desktop) */}
        <div className="hidden lg:block absolute -bottom-16 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-6xl px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex items-center p-4 border border-gray-100"
          >
            <div className="flex-1 px-6 py-3 border-r border-gray-100 group cursor-pointer hover:bg-orange-50/30 transition-colors">
              <span className="text-[11px] text-[#ff5e37] font-black uppercase tracking-widest text-left block">Destination</span>
              <p className="text-gray-800 font-bold text-lg text-left">Where to?</p>
            </div>
            <div className="flex-1 px-6 py-3 border-r border-gray-100 group cursor-pointer hover:bg-orange-50/30 transition-colors">
              <span className="text-[11px] text-[#ff5e37] font-black uppercase tracking-widest text-left block">Activity</span>
              <p className="text-gray-800 font-bold text-lg text-left">Any Activity</p>
            </div>
            <div className="flex-1 px-6 py-3 group cursor-pointer hover:bg-orange-50/30 transition-colors">
              <span className="text-[11px] text-[#ff5e37] font-black uppercase tracking-widest text-left block">Duration</span>
              <p className="text-gray-800 font-bold text-lg text-left">Choose Days</p>
            </div>
            <button 
              onClick={() => navigate("/packages")}
              className="bg-[#1a1b2e] hover:bg-[#ff5e37] text-white px-10 py-5 rounded-xl font-black transition-all duration-500 uppercase flex items-center justify-center gap-3 group shadow-lg"
            >
              Find Now
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Facility Section - Adjusted Padding */}
      <section className="pt-16 lg:pt-28 pb-12 bg-[#fdfcf7]">
        <FacilityHome />
      </section>

      {/* 3. Package Grid Section - Reduced Padding */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a1b2e] uppercase mb-4 tracking-tight">Our Featured Packages</h2>
            <div className="w-16 h-1 bg-[#ff5e37] mx-auto mb-8"></div>
            {/* <FeaturedPackages /> */}
        </div>
      </section>

      {/* 4. Stats Section  */}
      <section className="pb-2 bg-white">
        <StatsHome />
      </section>

      {/* 5. Destination Grid Section */}
      <section className="py-2 bg-white">
        <DestinationGrid />
      </section>

      {/* 6. Get To Know Us Section */}
      <section className="py-2 bg-white">
        <GetToKnowUs />
      </section>

      {/* 7. Tour Types Section */}
      <section className="py-2 bg-white">
        <TourTypes />
      </section>

    </main>
  );
};

export default Home;