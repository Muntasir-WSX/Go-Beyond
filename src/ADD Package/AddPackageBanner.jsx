import React from 'react';
import { motion } from 'framer-motion';
import { PlusCircle, ImagePlus } from 'lucide-react';

// আপনার ছবিগুলো
import cox from "../assets/cox bazar.jpg";
import kaptai from "../assets/kaptai.jpg";
import rangamati from "../assets/rangamati.jpg";
import sunset from "../assets/sunset.jpg";

const AddPackageBanner = () => {
    // ইমেজগুলোর অ্যালবাম স্টাইল কনফিগারেশন
    const albumPhotos = [
        { 
            src: cox, 
            alt: "Cox's Bazar", 
            style: "top-[10%] left-[5%] rotate-[-6deg] z-10 w-40 h-40 lg:w-52 lg:h-52" ,
            isPriority: true
        },
        { 
            src: kaptai, 
            alt: "Kaptai Lake", 
            style: "bottom-[5%] left-[15%] rotate-[8deg] z-20 w-44 h-44 lg:w-56 lg:h-56" 
        },
        { 
            src: rangamati, 
            alt: "Rangamati", 
            style: "top-[15%] right-[5%] rotate-[5deg] z-10 w-40 h-40 lg:w-48 lg:h-48" 
        },
        { 
            src: sunset, 
            alt: "Sea Sunset", 
            style: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] z-30 w-64 h-64 lg:w-80 lg:h-80 border-[#ff5e37]", 
            isPriority: true 
        },
    ];

    return (
        <section className="relative w-full bg-[#f8f7f0] py-16 lg:py-24 overflow-hidden border-b border-gray-200">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#ff5e37]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                
                {/* 📝 Left Side: Content */}
                <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center justify-center lg:justify-start gap-3"
                    >
                        <div className="h-0.5 w-12 bg-[#ff5e37]" />
                        <span className="text-[#ff5e37] font-black uppercase tracking-[0.3em] text-xs">
                            Create Your Journey
                        </span>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl lg:text-7xl font-black text-[#1a1b2e] leading-[1.05] uppercase tracking-tighter"
                    >
                        Design Your <br />
                        <span className="text-[#ff5e37]">Custom</span> Package.
                    </motion.h1>

                    <p className="text-gray-500 leading-relaxed text-lg lg:text-xl font-medium max-w-md mx-auto lg:mx-0">
                        Spread your memories. Share your favorite spots with the world by creating a unique travel package.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-4 bg-[#1a1b2e] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#ff5e37] transition-all duration-300 shadow-xl shadow-black/10 mx-auto lg:mx-0"
                    >
                        Start Creating <PlusCircle size={18} />
                    </motion.button>
                </div>

                {/* 📸 Right Side: Scattered Album Layout */}
                <div className="relative h-125 lg:h-150 order-1 lg:order-2 flex items-center justify-center">
                    
                    {albumPhotos.map((photo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2, type: "spring" }}
                            whileHover={{ 
                                scale: 1.1, 
                                rotate: 0, 
                                zIndex: 100,
                                transition: { duration: 0.3 } 
                            }}
                            className={`absolute p-3 bg-white shadow-2xl rounded-sm border border-gray-100 ${photo.style} 
                                ${photo.isPriority ? 'border-b-8 border-b-[#ff5e37]' : 'border-b-8 border-b-gray-200'}`}
                        >
                            <div className="w-full h-full overflow-hidden">
                                <img 
                                    src={photo.src} 
                                    alt={photo.alt} 
                                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
                                />
                            </div>
                            {/* Polaroid Style Caption Space */}
                            <div className="mt-2 text-[10px] font-bold text-black uppercase tracking-tighter text-center">
                                {photo.alt}
                            </div>
                        </motion.div>
                    ))}

                </div>
                
            </div>
        </section>
    );
};

export default AddPackageBanner;