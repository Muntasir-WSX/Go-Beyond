import React from 'react';
import { motion } from 'framer-motion';

// ইমেজ ইম্পোর্ট
import cox from "../assets/cox bazar.jpg";
import kaptai from "../assets/kaptai.jpg";
import rangamati from "../assets/rangamati.jpg";
import sunset from "../assets/sunset.jpg";

const AddPackageBanner = () => {
    const images = [cox, kaptai, rangamati, sunset];

    return (
        <section className="bg-[#f8f7f0] py-16 lg:py-24 overflow-hidden border-b border-gray-200">
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
                        {/* The Window Grid Style */}
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            {images.map((img, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    // aspect-square ব্যবহার করা হয়েছে AllPackages এর মতো
                                    className="overflow-hidden rounded-2xl border-4 border-white shadow-md aspect-square"
                                >
                                    <img 
                                        src={img} 
                                        alt="Travel Package" 
                                        className="w-full h-full object-cover" 
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Corner Accents (Left Aligned for Left Image) */}
                        <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-[#ff5e37] rounded-tl-3xl z-0"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-[#ff5e37] rounded-br-3xl z-0"></div>

                        {/* Floating Status Badge (Pop-up) */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                            // পজিশন AllPackages এর উল্টো দিকে (ডানে)
                            className="absolute -bottom-6 right-10 z-20 bg-[#1a1b2e] text-white p-6 rounded-2xl shadow-2xl hidden md:block"
                        >
                            <span className="text-3xl font-black block leading-none text-[#ff5e37]">
                                NEW
                            </span>
                            <span className="text-[10px] uppercase font-bold tracking-widest">
                                Custom Plans
                            </span>
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
                            Create Your Journey
                        </motion.h4>

                        <h2 className="text-5xl lg:text-7xl font-black text-[#1a1b2e] leading-[1.05] uppercase tracking-tighter">
                            Design Your <br />
                            <span className="text-[#ff5e37]">Custom</span> Package.
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <p className="text-gray-500 text-lg lg:text-xl font-medium leading-relaxed">
                            Spread your memories. Share your favorite spots with the world by creating a 
                            <span className="text-[#1a1b2e] font-bold"> unique travel package</span> designed for fellow explorers.
                        </p>

                        <div className="flex gap-8 border-y border-gray-200 py-6">
                            <div>
                                <p className="text-2xl font-black text-[#1a1b2e]">Fast</p>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Listing</p>
                            </div>
                            <div className="w-px bg-gray-200" />
                            <div>
                                <p className="text-2xl font-black text-[#1a1b2e]">Global</p>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Reach</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default AddPackageBanner;