import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, Calendar } from 'lucide-react';
import image3 from "../assets/travelar2.jpg";
import image1 from "../assets/bogalake.png"; 
import image4 from "../assets/travelar3.jpg";
import image2 from "../assets/sajek.jpg";

const TourPackageDetailsBanner = () => {
    return (
        <section className="w-full bg-[#FDFBF7] py-16 lg:py-24 overflow-hidden border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* 📝 Left Side: Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1"
                >
                    <div className="space-y-4">
                        <motion.h4
                            className="text-[#ff5e37] font-serif italic text-2xl"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            ~ Discover the Unseen ~
                        </motion.h4>
                        
                        <h1 className="text-5xl lg:text-7xl font-black text-[#1a1b2e] leading-[1.05] uppercase tracking-tighter">
                            Experience Your <br />
                            <span className="text-[#ff5e37]">Dream</span> Journey
                        </h1>
                    </div>

                    <div className="space-y-6">
                        {/* Features Badges */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 text-sm font-bold text-gray-600">
                                <MapPin size={16} className="text-[#ff5e37]" />
                                <span>Top Destinations</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 text-sm font-bold text-gray-600">
                                <Calendar size={16} className="text-[#ff5e37]" />
                                <span>Planned Itinerary</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 text-sm font-bold text-gray-600">
                                <Sparkles size={16} className="text-[#ff5e37]" />
                                <span>Premium Quality</span>
                            </div>
                        </div>

                        <p className="text-gray-500 text-lg lg:text-xl font-medium leading-relaxed pt-4 border-t border-gray-100">
                            Explore the world with our carefully curated tour plans. We ensure every 
                            <span className="text-[#1a1b2e] font-bold"> moment of your journey</span> is filled with wonder and comfort.
                        </p>
                    </div>
                </motion.div>

                {/* 📸 Right Side: Image Grid (Exactly AllPackages Style) */}
                <motion.div 
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 order-1 lg:order-2"
                >
                    <div className="relative p-4">
                        {/* The Window Grid Style with Exact Aspect Square */}
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            {[image3, image2, image1, image4].map((img, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="overflow-hidden rounded-2xl border-4 border-white shadow-md aspect-square"
                                >
                                    <img 
                                        src={img} 
                                        alt="Tour Spot" 
                                        className="w-full h-full object-cover" 
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Corner Accents (Right Aligned for Right Image) */}
                        <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-[#ff5e37] rounded-tr-3xl z-0"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-[#ff5e37] rounded-bl-3xl z-0"></div>

                        {/* Floating Experience Badge (Pop-up like AllPackages) */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                            className="absolute -bottom-6 left-10 z-20 bg-[#1a1b2e] text-white p-6 rounded-2xl shadow-2xl hidden md:block"
                        >
                            <span className="text-3xl font-black block leading-none text-[#ff5e37]">
                                10+
                            </span>
                            <span className="text-[10px] uppercase font-bold tracking-widest">
                                Days Expedition
                            </span>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default TourPackageDetailsBanner;