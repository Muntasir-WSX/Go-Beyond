import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import bandarban from "../../assets/bandarban.jpg";
import coxBazar from "../../assets/cox bazar.jpg";
import sajek from "../../assets/sajek.jpg";
import kaptai from "../../assets/kaptai.jpg";
import saintMartin from "../../assets/saint martin.jpg";
import naval2 from "../../assets/naval-2.jpg";
import rangamati from "../../assets/rangamati.jpg";
import FacilityHome from "./FacilityHome";
import StatsHome from "./StatsHome";
import DestinationGrid from "./DestinationGrid";
import GetToKnowUs from "../../Shared Components/GetToKnowUs";
import TourTypes from "../../Shared Components/TourTypes";
import NotAMember from "../../Shared Components/NotAMember";
import Partners from "../../Shared Components/Partners";
import UserReview from "../../Shared Components/UserRivew";
import FeaturedPackages from "./FeaturedPackages";

const Home = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const featuredSectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get("https://go-beyond-server-mu.vercel.app/tourpackages") 
      .then(res => {
        setPackages(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch Error:", err);
        setLoading(false);
      });
  }, []);

  const scrollToFeatured = () => {
    featuredSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const slides = [
    { img: bandarban, title: "Adventure Awaits in Bandarban", desc: "Experience the majestic hills and clouds." },
    { img: coxBazar, title: "Relax at Cox's Bazar", desc: "Unwind on the world's longest natural beach." },
    { img: sajek, title: "Escape to Sajek Valley", desc: "The cottage in the clouds is calling." },
    { img: saintMartin, title: "Crystal Waters of Saint Martin", desc: "Explore the only coral island." },
    { img: kaptai, title: "Serenity of Kaptai Lake", desc: "Boat rides and peaceful sunsets." },
    { img: naval2, title: "Evening Vibes at Naval Port", desc: "Enjoy the refreshing breeze." },
    { img: rangamati, title: "Culture & Nature of Rangamati", desc: "Discover tribal heritage." },
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
                    <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-6 flex flex-col items-center">
                      <span className="text-[#ff5e37] font-serif italic text-2xl md:text-3xl tracking-wide mb-2 block">~ Traveling with ~</span>
                      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-1 rounded-full border border-white/20 shadow-lg">
                        <span className="text-white text-xl font-light tracking-[0.3em] uppercase">Go <span className="text-[#ff5e37] font-bold">Beyond</span></span>
                      </div>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="text-white text-4xl md:text-6xl font-black mb-6 uppercase leading-tight">{slide.title}</motion.h1>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-gray-200 text-lg md:text-2xl italic font-medium max-w-3xl mx-auto mb-8">"{slide.desc}"</motion.p>
                    <div className="lg:hidden">
                      <motion.button onClick={scrollToFeatured} className="bg-[#ff5e37] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg">View All Packages</motion.button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Search Bar Desktop */}
        <div className="hidden lg:block absolute -bottom-16 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-6xl px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-2xl flex items-center p-4 border border-gray-100">
            <div className="flex-1 px-6 py-3 border-r border-gray-100">
              <span className="text-[11px] text-[#ff5e37] font-black uppercase tracking-widest block">Destination</span>
              <p className="text-gray-800 font-bold text-lg">Where to?</p>
            </div>
            <div className="flex-1 px-6 py-3 border-r border-gray-100">
              <span className="text-[11px] text-[#ff5e37] font-black uppercase tracking-widest block">Activity</span>
              <p className="text-gray-800 font-bold text-lg">Any Activity</p>
            </div>
            <div className="flex-1 px-6 py-3">
              <span className="text-[11px] text-[#ff5e37] font-black uppercase tracking-widest block">Duration</span>
              <p className="text-gray-800 font-bold text-lg">Choose Days</p>
            </div>
            <button onClick={scrollToFeatured} className="bg-[#ff5e37] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#1a1b2e] transition-all duration-300">Find Now →</button>
          </motion.div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="pt-16 lg:pt-28 pb-12 bg-[#fdfcf7]"><FacilityHome /></section>

      {/* Package Grid Section */}
      <section ref={featuredSectionRef} className="py-10 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1b2e] uppercase mb-4">Our Featured Packages</h2>
          <div className="w-16 h-1 bg-[#ff5e37] mx-auto mb-8"></div>
          
          {loading ? (
            <div className="text-xl font-bold py-10">Loading Packages...</div>
          ) : (
            <FeaturedPackages packages={packages} />
          )}
        </div>
      </section>

      {/* বাকি সেকশনগুলো */}
      <StatsHome />
      <DestinationGrid />
      <GetToKnowUs />
      <TourTypes />
      <Partners />
      <NotAMember /> 
      <UserReview />
    </main>
  );
};

export default Home;