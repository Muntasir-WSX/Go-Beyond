import React from 'react';
import { motion } from 'framer-motion';

// ইমেজ পাথগুলো আপনার প্রোজেক্ট অনুযায়ী চেক করে নিন
import image1 from "../assets/bandarban.jpg";
import image2 from "../assets/naval-2.jpg";
import image3 from "../assets/cox bazar.jpg"; 
import image4 from "../assets/sajek.jpg";

const ManageMyPackageBanner = () => {
    return (
        <section className="w-full bg-[#FDFBF7] py-16 lg:py-24 overflow-hidden border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* 📝 Left Side: Text Content (AllPackageBanner এর মতো x: -60 এনিমেশন) */}
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
                             <span className="text-[#ff5e37] font-bold uppercase tracking-widest text-xs">Management</span>
                        </div>
                        
                        <h1 className="text-5xl lg:text-7xl font-black text-[#1a1b2e] leading-[1.05] uppercase tracking-tighter">
                            Manage Your <br />
                            <span className="text-[#ff5e37]">Active</span> Listings.
                        </h1>
                    </div>

                    <div className="space-y-6">
                        <p className="text-gray-500 text-lg lg:text-xl font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                            Take full control of your tour packages. View, update, or organize your 
                            <span className="text-[#1a1b2e] font-bold"> journey listings</span> from this centralized dashboard.
                        </p>

                        {/* স্ট্যাটাস সেকশন (AllPackageBanner এর মতো স্টাইল) */}
                        <div className="flex justify-center lg:justify-start gap-8 border-y border-gray-200 py-6">
                            <div>
                                <p className="text-2xl font-black text-[#1a1b2e]">Real-time</p>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Updates</p>
                            </div>
                            <div className="w-px bg-gray-200" />
                            <div>
                                <p className="text-2xl font-black text-[#1a1b2e]">Secure</p>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Data Control</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 📸 Right Side: Image Grid (AllPackageBanner এর মতো x: 60 এনিমেশন) */}
                <motion.div 
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2"
                >
                    <div className="relative p-4 w-fit mx-auto lg:ml-auto">
                        
                        {/* Orange Corner Accents - Tight Fit */}
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
                                        alt="Package" 
                                        className="w-full h-full object-cover" 
                                    />
                                    
                                    {/* চতুর্থ ছবিতে ব্যাজ যোগ করা হয়েছে (AllPackageBadge স্টাইল) */}
                                    {index === 1 && (
                                        <div className="absolute top-0 left-0 bg-[#ff5e37] px-4 py-1 rounded-br-xl shadow-lg">
                                            <span className="text-white font-bold text-[10px] uppercase tracking-widest">Manage Spot</span>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ManageMyPackageBanner;