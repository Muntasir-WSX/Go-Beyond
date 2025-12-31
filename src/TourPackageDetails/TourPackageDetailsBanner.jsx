import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, Calendar } from 'lucide-react';

// ইমেজগুলো শাফেল করে ইমপোর্ট করা হয়েছে
import image3 from "../assets/travelar2.jpg";
import image1 from "../assets/bogalake.png"; 
import image4 from "../assets/travelar3.jpg";
import image2 from "../assets/sajek.jpg";

const TourPackageDetailsBanner = () => {
    return (
        <section className="w-full bg-[#FDFBF7] py-12 lg:py-16 overflow-hidden border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                {/* 📝 Left Side: Content (Order changed to 1) */}
                <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left order-2 lg:order-1">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#ff5e37] font-bold italic text-xl lg:text-2xl block"
                        style={{ fontFamily: 'cursive' }}
                    >
                        ~ Discover the Unseen ~
                    </motion.span>

                    <motion.h1 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl lg:text-6xl font-black text-[#1a1b2e] uppercase leading-none tracking-tighter"
                    >
                        Experience Your <br />
                        <span className="text-[#ff5e37]">Dream</span> Journey
                    </motion.h1>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center lg:justify-start gap-4 text-gray-500 font-medium text-sm"
                    >
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                            <MapPin size={16} className="text-[#ff5e37]" />
                            <span>Top Destinations</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                            <Calendar size={16} className="text-[#ff5e37]" />
                            <span>Planned Itinerary</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                            <Sparkles size={16} className="text-[#ff5e37]" />
                            <span>Premium Quality</span>
                        </div>
                    </motion.div>
                </div>

                {/* 📸 Right Side: Compact Image Grid (Order changed to 2) */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2"
                >
                    <div className="relative p-8 w-fit">
                        {/* Orange Accents */}
                        <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#ff5e37] rounded-tl-2xl -translate-x-2 -translate-y-2"></div>
                        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#ff5e37] rounded-br-2xl translate-x-2 translate-y-2"></div>

                        {/* Image Grid */}
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            {[image3,image2, image1, image4, ].map((img, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
                                    className={`relative overflow-hidden rounded-xl border-2 border-white shadow-lg aspect-square w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 
                                        ${index === 1 || index === 3 ? 'translate-y-4' : ''}
                                        ${index === 0 ? '-translate-y-2' : ''}`}
                                >
                                    <img src={img} alt="Tour Spot" className="w-full h-full object-cover" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default TourPackageDetailsBanner;