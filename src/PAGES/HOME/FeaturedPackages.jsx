import React from "react";
import FeaturedPackageCard from "./FeaturedPackageCard";
import { useNavigate } from "react-router-dom";
const FeaturedPackages = ({ packages = [], showAll = false }) => {
  const navigate = useNavigate();

  if (!packages || packages.length === 0) {
    return (
      <div className="py-10 text-gray-500 font-medium text-lg">
        No packages available at the moment.
      </div>
    );
  }

  const displayPackages = showAll ? packages : packages.slice(0, 6);

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayPackages.map((pckg) => (
          <FeaturedPackageCard key={pckg._id} pckg={pckg} />
        ))}
      </div>
      {!showAll && packages.length > 6 && (
        <div className="flex justify-center pt-8">
          <button
            onClick={() => navigate("/packages")}
            className="inline-flex items-center gap-4 bg-[#ff5e37] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#1a1b2e] transition-all duration-300 shadow-lg"
          >
            View All Packages
            <span>→</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedPackages;
