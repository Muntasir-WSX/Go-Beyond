import React from 'react';
import { motion } from 'framer-motion';
import { PlusCircle } from 'lucide-react';

// ইমেজ ইম্পোর্ট
import cox from "../assets/cox bazar.jpg";
import kaptai from "../assets/kaptai.jpg";
import rangamati from "../assets/rangamati.jpg";
import sunset from "../assets/sunset.jpg";

const AddPackageBanner = () => {
    // ইমেজ অ্যারে
    const images = [cox, kaptai, rangamati, sunset];

    return (
        <section className="w-full bg-[#f8f7f0] py-16 lg:py-24 overflow-hidden border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* 📸 Image Grid: Enhanced Size and Position */}
                <motion.div 
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 order-1 lg:order-2"
                >
                    <div className="relative p-6 w-fit mx-auto lg:mr-0 lg:ml-auto">
                        
                        {/* Orange Corner Accents */}
                        <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-[#ff5e37] rounded-tr-3xl z-0"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-[#ff5e37] rounded-bl-3xl z-0"></div>

                        {/* Image Grid */}
                        <div className="relative z-10 grid grid-cols-2 gap-6 lg:gap-8">
                            {images.map((img, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -2 : 2 }}
                                    transition={{ duration: 0.4 }}
                                    className={`relative overflow-hidden rounded-2xl border-4 border-white shadow-xl aspect-square w-40 h-40 lg:w-56 lg:h-56 
                                        ${index === 1 || index === 3 ? 'translate-y-8' : ''} 
                                        ${index === 2 ? '-translate-y-4' : ''}`}
                                >
                                    <img 
                                        src={img} 
                                        alt="Travel Package" 
                                        className="w-full h-full object-cover" 
                                    />
                                    
                                    {/* Cox's Bazar (index 0) এ এখন ট্যাগটি দেওয়া হয়েছে */}
                                    {index === 0 && (
                                        <div className="absolute top-0 left-0 bg-[#ff5e37] px-4 py-1 rounded-br-xl shadow-lg">
                                            <span className="text-white font-bold text-[10px] uppercase tracking-widest">Choose</span>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* 📝 Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 space-y-8 text-center lg:text-left order-2 lg:order-1"
                >
                    <div className="space-y-4">
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                             <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: 40 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="h-0.5 bg-[#ff5e37]"
                             ></motion.div>
                             <span className="text-[#ff5e37] font-bold uppercase tracking-widest text-xs">Create Your Journey</span>
                        </div>
                        
                        <h1 className="text-5xl lg:text-7xl font-black text-[#1a1b2e] leading-[1.05] uppercase tracking-tighter">
                            Design Your <br />
                            <span className="text-[#ff5e37]">Custom</span> Package.
                        </h1>
                    </div>

                    <div className="space-y-6">
                        <p className="text-gray-500 text-lg lg:text-xl font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                            Spread your memories. Share your favorite spots with the world by creating a 
                            <span className="text-[#1a1b2e] font-bold"> unique travel package</span>.
                        </p>

                        {/* Summary Stats */}
                        <div className="flex justify-center lg:justify-start gap-8 border-y border-gray-200 py-6">
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

                    {/* Action Button */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="pt-4"
                    >
                        <button
                            className="inline-flex items-center gap-4 bg-[#ff5e37] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#1a1b2e] transition-all duration-300 shadow-lg shadow-[#ff5e37]/25"
                        >
                            Start Creating <PlusCircle size={18} />
                        </button>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default AddPackageBanner;