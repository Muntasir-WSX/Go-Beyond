import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import image1 from "../assets/travelar.jpg";
import image3 from "../assets/Tourist.jpg";  
import image2 from "../assets/travelar3.jpg";
import image4 from "../assets/signin.jpg";

const BookPackageBanner = () => {
    return (
        <section className="bg-[#fcfcfc] py-16 lg:py-24 overflow-hidden border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                
                {/* 📸 Left Side: Image Grid (Exactly AllPackages Style) */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2"
                >
                    <div className="relative p-4">
                        {/* The Window Grid Style with Exact Aspect Square */}
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            {[image1, image3, image4, image2].map((img, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="overflow-hidden rounded-2xl border-4 border-white shadow-md aspect-square"
                                >
                                    <img 
                                        src={img} 
                                        alt="Expedition" 
                                        className="w-full h-full object-cover" 
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Corner Accents (Matching Global Style - Positioned for Left Image) */}
                        <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-[#ff5e37] rounded-tl-3xl z-0"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-[#ff5e37] rounded-br-3xl z-0"></div>

                        {/* Floating Status Badge (Pop-up like AllPackages) */}
                        <motion.div
                            initial={{ scale: 0, rotate: 10 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                            className="absolute -bottom-6 right-10 z-20 bg-[#1a1b2e] text-white p-6 rounded-2xl shadow-2xl hidden md:flex items-center gap-4"
                        >
                            <div className="bg-[#ff5e37] p-2 rounded-lg">
                                <Sparkles size={18} className="text-white" />
                            </div>
                            <div>
                                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block leading-none">Status</span>
                                <span className="text-sm font-black uppercase tracking-tight">Booking Open</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* 📝 Right Side: Content */}
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
                            Reservation
                        </motion.h4>

                        <h2 className="text-5xl lg:text-7xl font-black text-[#1a1b2e] leading-[1.05] uppercase tracking-tighter">
                            Complete <br />
                            <span className="text-[#ff5e37]">Your</span> Booking
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <p className="text-gray-500 leading-relaxed text-lg lg:text-xl font-medium">
                            You are just one step away from your dream expedition. 
                            Please fill out the details carefully to confirm your presence in our 
                            <span className="text-[#1a1b2e] font-bold"> upcoming journey</span>.
                        </p>

                        {/* Stats / Features section */}
                        <div className="flex gap-8 border-y border-gray-200 py-6">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-emerald-500" size={28} />
                                <div>
                                    <p className="text-2xl font-black text-[#1a1b2e]">100%</p>
                                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Secure Process</p>
                                </div>
                            </div>
                            <div className="w-px bg-gray-200" />
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-emerald-500" size={28} />
                                <div>
                                    <p className="text-2xl font-black text-[#1a1b2e]">FAST</p>
                                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Confirmation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default BookPackageBanner;