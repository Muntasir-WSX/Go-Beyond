import React, { useEffect, useRef } from "react";
import { Play } from "lucide-react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import saintMartin from "../../assets/saint martin.jpg";

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 80,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return (
    <span
      ref={ref}
      className="font-serif italic"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      0{suffix}
    </span>
  );
};

const StatsHome = () => {
  const videoUrl = "https://youtube.com/shorts/-JkWXDN6RZA?si=l_h8xA4Wfg1xMfPk";

  const stats = [
    { label: "Total Donations", value: 890, suffix: "+" },
    { label: "Campaigns Closed", value: 570, suffix: "" },
    { label: "Happy People", value: 930, suffix: "k" },
    { label: "Our Volunteers", value: 68, suffix: "+" },
  ];

  return (
    <section className="w-full">
      {/*  bg-image & button */}
      <div
        className="relative h-150 w-full bg-cover bg-fixed bg-center flex flex-col items-center justify-center text-center px-6"
        style={{ backgroundImage: `url(${saintMartin})` }}
      >
        <div className="absolute inset-0 bg-[#1a1b2e]/75" />

        <div className="relative z-10 flex flex-col items-center">
          {/* yt-link */}
          <motion.a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="w-24 h-24 bg-[#ff5e37] rounded-full flex items-center justify-center cursor-pointer mb-8 group relative"
          >
            <div className="absolute inset-0 bg-[#ff5e37] rounded-full animate-ping opacity-30" />
            <Play
              fill="white"
              className="text-white ml-1 relative z-10"
              size={35}
            />
          </motion.a>

          <h4
            className="text-[#ff5e37] font-serif italic text-3xl md:text-4xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Are you ready to travel?
          </h4>

          <h2 className="text-white text-4xl md:text-5xl font-black max-w-5xl leading-[1.1] uppercase tracking-tighter">
            Go Beyond is a World Leading <br /> Online Tour Booking Platform
          </h2>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center group"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#ff5e37] mb-4 flex tracking-tight">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                <div className="h-0.5 w-12 bg-gray-200 mb-5 group-hover:w-20 group-hover:bg-[#ff5e37] transition-all duration-500"></div>

                <p className="text-gray-500 font-bold uppercase tracking-[0.25em] text-xs md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
      `}</style>
    </section>
  );
};

export default StatsHome;
