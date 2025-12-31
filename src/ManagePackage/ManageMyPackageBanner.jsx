import React from 'react';

// Image imports
import image1 from "../assets/bandarban.jpg";
import image2 from "../assets/naval-2.jpg";
import image3 from "../assets/cox bazar.jpg"; 
import image4 from "../assets/sajek.jpg";

const ManageMyPackageBanner = () => {
    return (
        <section className="w-full bg-[#FDFBF7] py-16 lg:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* 📝 Left Side: Text Content */}
                <div className="space-y-6 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                         <div className="w-10 h-0.5 bg-[#ff5e37]"></div>
                         <span className="text-[#ff5e37] font-bold uppercase tracking-widest text-xs">Management</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-black text-[#1a1b2e] leading-tight uppercase tracking-tighter">
                        Manage Your <br />
                        <span className="text-[#ff5e37]">Active Listings.</span>
                    </h1>
                    <p className="text-gray-500 text-lg max-w-md mx-auto lg:mx-0 font-medium leading-relaxed">
                        Take full control of your tour packages. View, update, or organize your journey listings from this centralized dashboard.
                    </p>
                </div>

                {/* 📸 Right Side: Tight Square Grid with Close Orange Accents */}
                <div className="flex justify-center items-center">
                    
                    {/* Container with relative and w-fit to keep borders close to images */}
                    <div className="relative p-4 w-fit">
                        
                        {/* Close Orange Accents */}
                        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#ff5e37] rounded-tr-[1.5rem] pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#ff5e37] rounded-bl-[1.5rem] pointer-events-none"></div>

                        {/* Image Grid */}
                        <div className="grid grid-cols-2 gap-3 relative z-10">
                            {/* Square Image 1 */}
                            <div className="w-28 h-28 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-sm border-2 border-white">
                                <img src={image1} alt="Dest 1" className="w-full h-full object-cover" />
                            </div>
                            
                            {/* Square Image 2 */}
                            <div className="w-28 h-28 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-sm border-2 border-white translate-y-3">
                                <img src={image2} alt="Dest 2" className="w-full h-full object-cover" />
                            </div>

                            {/* Square Image 3 */}
                            <div className="w-28 h-28 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-sm border-2 border-white -translate-y-3">
                                <img src={image3} alt="Dest 3" className="w-full h-full object-cover" />
                            </div>

                            {/* Square Image 4 with Badge */}
                            <div className="relative w-28 h-28 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-sm border-2 border-white">
                                <img src={image4} alt="Dest 4" className="w-full h-full object-cover" />
                                
                                {/* 50+ Live Packages Badge */}
                                <div className="absolute bottom-0 right-0 left-0 bg-[#1a1b2e] py-1.5 text-center">
                                    <span className="text-[#ff5e37] font-bold text-base block leading-none">50+</span>
                                    <span className="text-white text-[8px] uppercase font-bold tracking-tighter">Live Packages</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ManageMyPackageBanner;