import React from 'react';
import { motion } from 'framer-motion';

// ইমেজ ইম্পোর্ট
import image1 from "../assets/travelar.jpg";
import image2 from "../assets/travelar2.jpg";
import image3 from "../assets/travelar3.jpg";
import image4 from "../assets/travelar4.jpg";

const MyBookingsBanner = () => {
    return (
        <section className="w-full bg-[#FDFBF7] py-16 lg:py-24 overflow-hidden border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                <motion.div 
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2"
                >
                    <div className="relative p-4">
                      
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            {[image1, image2, image3, image4].map((img, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="overflow-hidden rounded-2xl border-4 border-white shadow-md aspect-square"
                                >
                                    <img 
                                        src={img} 
                                        alt="My Booking" 
                                        className="w-full h-full object-cover" 
                                    />
                                </motion.div>
                            ))}
                        </div>

                        <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-[#ff5e37] rounded-tl-3xl z-0"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-[#ff5e37] rounded-br-3xl z-0"></div>
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                            className="absolute -bottom-6 right-10 z-20 bg-[#1a1b2e] text-white p-6 rounded-2xl shadow-2xl hidden md:block"
                        >
                            <span className="text-3xl font-black block leading-none text-[#ff5e37]">
                                TRIP
                            </span>
                            <span className="text-[10px] uppercase font-bold tracking-widest">
                                Confirmed
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 60 }}
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
                            Your Reservations
                        </motion.h4>
                        
                        <h1 className="text-5xl lg:text-7xl font-black text-[#1a1b2e] leading-[1.05] uppercase tracking-tighter">
                            Your Booked <br />
                            <span className="text-[#ff5e37]">Adventures.</span>
                        </h1>
                    </div>

                    <div className="space-y-6">
                        <p className="text-gray-500 text-lg lg:text-xl font-medium leading-relaxed">
                            Keep track of all your upcoming journeys. Review your trip details, schedules, and 
                            <span className="text-[#1a1b2e] font-bold"> booking status</span> in one place, optimized for your convenience.
                        </p>
                        <div className="flex gap-8 border-y border-gray-200 py-6">
                            <div>
                                <p className="text-2xl font-black text-[#1a1b2e]">History</p>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Saved Trips</p>
                            </div>
                            <div className="w-px bg-gray-200" />
                            <div>
                                <p className="text-2xl font-black text-[#1a1b2e]">Verified</p>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Bookings</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default MyBookingsBanner;