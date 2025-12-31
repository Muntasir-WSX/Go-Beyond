import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, CalendarCheck } from 'lucide-react';

// ইমেজ ইম্পোর্ট
import image1 from "../assets/travelar.jpg";
import image2 from "../assets/travelar2.jpg";
import image3 from "../assets/travelar3.jpg";
import image4 from "../assets/travelar4.jpg";

const MyBookingsBanner = () => {
    return (
        <section className="w-full bg-[#FDFBF7] py-16 lg:py-24 overflow-hidden border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">

                {/* 📸 Right Side: Image Grid with Same Motion Style */}
                <motion.div 
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2"
                >
                    <div className="relative p-4 w-fit mx-auto lg:mr-0 lg:ml-auto">
                        
                        {/* Orange Corner Accents */}
                        <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-[#ff5e37] rounded-tr-3xl z-0"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-[#ff5e37] rounded-bl-3xl z-0"></div>

                        {/* Image Grid */}
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            {[image1, image2, image3, image4].map((img, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className={`overflow-hidden rounded-2xl border-4 border-white shadow-md aspect-square w-32 h-32 lg:w-44 lg:h-44 
                                        ${index === 1 || index === 3 ? 'translate-y-4' : ''} 
                                        ${index === 2 ? '-translate-y-4' : ''}`}
                                >
                                    <img 
                                        src={img} 
                                        alt="My Booking" 
                                        className="w-full h-full object-cover" 
                                    />
                                    
                                    {/* Badge on 4th Image */}
                                    {index === 2 && (
                                        <div className="absolute top-0 left-0 bg-[#ff5e37] px-4 py-1 rounded-br-xl shadow-lg">
                                            <span className="text-white font-bold text-[10px] uppercase tracking-widest">Your spot</span>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* 📝 Left Side: Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 space-y-8 text-center lg:text-left"
                >
                    <div className="space-y-4">
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                             <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: 40 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="h-0.5 bg-[#ff5e37]"
                             ></motion.div>
                             <span className="text-[#ff5e37] font-bold uppercase tracking-widest text-xs">Reservations</span>
                        </div>
                        
                        <h1 className="text-5xl lg:text-7xl font-black text-[#1a1b2e] leading-[1.05] uppercase tracking-tighter">
                            Your Booked <br />
                            <span className="text-[#ff5e37]">Adventures.</span>
                        </h1>
                    </div>

                    <div className="space-y-6">
                        <p className="text-gray-500 text-lg lg:text-xl font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                            Keep track of all your upcoming journeys. Review your trip details, schedules, and 
                            <span className="text-[#1a1b2e] font-bold"> booking status</span> in one place.
                        </p>

                        {/* Booking Summary Stats */}
                        <div className="flex justify-center lg:justify-start gap-8 border-y border-gray-200 py-6">
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

                    {/* My Bookings Button */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="pt-4"
                    >
                        <Link
                            to="/my-bookings-list"
                            className="inline-flex items-center gap-4 bg-[#1a1b2e] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#ff5e37] transition-all duration-300 shadow-xl shadow-[#1a1b2e]/10"
                        >
                            My Bookings <CalendarCheck size={18} />
                        </Link>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default MyBookingsBanner;