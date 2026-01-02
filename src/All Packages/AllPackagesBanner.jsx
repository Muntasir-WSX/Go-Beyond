import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import bogalake from "../assets/bogalake.png";
import Tourist from "../assets/Tourist.jpg"; 
import nafakhum from "../assets/nafakhum.png";
import saintmartin from "../assets/signInMain.jpg";

const AllPackagesBanner = () => {
    return (
        <section className="bg-white py-16 lg:py-24 overflow-hidden border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2"
                >
                    <div className="relative p-4">
                      
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            {[bogalake, Tourist, nafakhum, saintmartin].map((img, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="overflow-hidden rounded-2xl border-4 border-white shadow-md aspect-square"
                                >
                                    <img 
                                        src={img} 
                                        alt="Destination" 
                                        className="w-full h-full object-cover" 
                                    />
                                </motion.div>
                            ))}
                        </div>

                        <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-[#ff5e37] rounded-tr-3xl z-0"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-[#ff5e37] rounded-bl-3xl z-0"></div>
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                            className="absolute -bottom-6 right-10 z-20 bg-[#1a1b2e] text-white p-6 rounded-2xl shadow-2xl hidden md:block"
                        >
                            <span className="text-3xl font-black block leading-none text-[#ff5e37]">
                                50+
                            </span>
                            <span className="text-[10px] uppercase font-bold tracking-widest">
                                Live Packages
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 space-y-8"
                >
                    <div className="space-y-4">
                        <motion.h4
                            className="text-[#ff5e37] font-serif italic text-2xl"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Explore Our Collection
                        </motion.h4>

                        <h2 className="text-5xl lg:text-7xl font-black text-[#1a1b2e] leading-[1.05] uppercase tracking-tighter">
                            All Our <br />
                            <span className="text-[#ff5e37]">Premium</span> Packages
                        </h2>
                    </div>

                    <div className="space-y-5">
                        <p className="text-gray-500 leading-relaxed text-lg lg:text-xl font-medium">
                            From the misty hills of the North to the deep blue of the South. 
                            Choose from our <span className="text-[#1a1b2e] font-bold">handpicked travel deals</span> designed 
                            for every kind of explorer.
                        </p>

                        <div className="flex gap-8 border-y border-gray-200 py-6">
                            <div>
                                <p className="text-2xl font-black text-[#1a1b2e]">100%</p>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Secure Booking</p>
                            </div>
                            <div className="w-px bg-gray-200" />
                            <div>
                                <p className="text-2xl font-black text-[#1a1b2e]">24/7</p>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Travel Support</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default AllPackagesBanner;