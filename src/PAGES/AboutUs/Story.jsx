import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Map } from 'lucide-react';
import seaview from '../../assets/signin.jpg';

const Story = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <img 
                                src={seaview} 
                                alt="Our Journey" 
                                className="rounded-3xl shadow-2xl w-full h-100 lg:h-125 object-cover"
                            />
                          
                            <div className="absolute -bottom-6 -right-6 bg-[#ff5e37] p-6 rounded-2xl shadow-xl hidden md:block">
                                <div className="text-white text-center">
                                    <span className="block text-3xl font-black italic">6+</span>
                                    <span className="text-[10px] uppercase font-bold tracking-widest">Years Experience</span>
                                </div>
                            </div>
                        </motion.div>
                        
                       
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#ff5e37]/10 rounded-full blur-3xl -z-10"></div>
                    </div>

                    <div className="w-full lg:w-1/2 space-y-6">
                        <div className="space-y-2">
                            <motion.span 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-[#ff5e37] font-bold italic text-lg lg:text-xl block"
                                style={{ fontFamily: 'cursive' }} 
                            >
                                Get to know us
                            </motion.span>
                            <h2 className="text-3xl lg:text-5xl font-black text-[#1a1b2e] leading-tight tracking-tighter uppercase">
                                Crafting Unforgettable <br /> 
                                <span className="text-[#ff5e37]">Journeys</span> Beyond
                            </h2>
                        </div>

                        <p className="text-gray-500 text-base lg:text-lg leading-relaxed font-medium">
                            At GoBeyond, we believe travel is more than just visiting a place—it's about the stories you bring back. Since 2019, we’ve been the trusted partner for over 1500 explorers in Chattogram.
                        </p>

                        {/* Features List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                            {[
                                "Expert Local Guides", 
                                "Customized Tour Plans", 
                                "Premium Accommodations", 
                                "24/7 Travel Support"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 group">
                                    <CheckCircle2 size={18} className="text-[#ff5e37] group-hover:scale-110 transition-transform" />
                                    <span className="font-bold text-[#1a1b2e] text-sm uppercase tracking-tight">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-10 pt-6 border-t border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-gray-50 rounded-xl text-[#ff5e37]">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-[#1a1b2e]">1k+</h4>
                                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Satisfied Clients</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-gray-50 rounded-xl text-[#ff5e37]">
                                    <Map size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-[#1a1b2e]">20+</h4>
                                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Destinations</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Story;