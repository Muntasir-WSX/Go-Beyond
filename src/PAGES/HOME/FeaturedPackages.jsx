import React, { use } from 'react';
import FeaturedPackageCard from './FeaturedPackageCard';
import { useNavigate } from 'react-router-dom';

const FeaturedPackages = ({ tourpackagePromise }) => {
    const tourPackages = use(tourpackagePromise);
    const navigate = useNavigate();

    return (
        <div className="space-y-12">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
                {tourPackages?.slice(0, 6).map(pckg => (
                    <FeaturedPackageCard key={pckg._id} pckg={pckg} />
                ))}
            </div>

            {/* View All Button */}
            <div className="flex justify-center pt-8">
                <button
                    onClick={() => navigate("/packages")}
                    className="inline-flex items-center gap-4 bg-[#ff5e37] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#1a1b2e] transition-all duration-300 shadow-lg shadow-[#ff5e37]/25"
                >
                    View All Packages
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button>
            </div>
        </div>
    );
};

export default FeaturedPackages;