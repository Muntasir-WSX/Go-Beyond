import React from 'react';
import { BadgeDollarSign, Plane, Zap } from 'lucide-react';

const FacilityHome = () => {
    return (
        <section className="bg-[#f8f7f0] py-16 px-6 md:px-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                
                {/* 1. Best Price Guarantee */}
                <div className="flex items-center gap-5 group">
                    <div className="bg-white p-5 rounded-full shadow-sm group-hover:bg-[#ff5e37] transition-all duration-300">
                        <BadgeDollarSign size={40} className="text-[#ff5e37] group-hover:text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#1a1b2e] mb-1">
                            Best Price Guarantee
                        </h3>
                        <p className="text-gray-500 text-sm max-w-50 leading-relaxed">
                            Enjoy premium travel experiences at the most competitive rates in the market.
                        </p>
                    </div>
                </div>

                {/* 2. Easy & Quick Booking */}
                <div className="flex items-center gap-5 group border-y md:border-y-0 md:border-x border-gray-200 py-8 md:py-0 md:px-12">
                    <div className="bg-white p-5 rounded-full shadow-sm group-hover:bg-[#ff5e37] transition-all duration-300">
                        <Zap size={40} className="text-[#ff5e37] group-hover:text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#1a1b2e] mb-1">
                            Easy & Quick Booking
                        </h3>
                        <p className="text-gray-500 text-sm max-w-50 leading-relaxed">
                            Secure your dream destination in just a few clicks with our seamless booking process.
                        </p>
                    </div>
                </div>

                {/* 3. Best Tour Selection */}
                <div className="flex items-center gap-5 group">
                    <div className="bg-white p-5 rounded-full shadow-sm group-hover:bg-[#ff5e37] transition-all duration-300">
                        <Plane size={40} className="text-[#ff5e37] group-hover:text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#1a1b2e] mb-1">
                            Best Tour Selection
                        </h3>
                        <p className="text-gray-500 text-sm max-w-50 leading-relaxed">
                            Explore a handpicked collection of unique journeys tailored to your adventure style.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FacilityHome;