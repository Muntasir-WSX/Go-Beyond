import React, { use } from "react";
import FeaturedPackageCard from "./FeaturedPackageCard";
import { useNavigate } from "react-router-dom";

const FeaturedPackages = ({ tourpackagePromise, showAll = false }) => {
  const tourPackages = use(tourpackagePromise);
  const navigate = useNavigate();

  // যদি showAll প্রপস true থাকে তবে সব দেখাবে, নাহলে শুধু প্রথম ৬টা
  const displayPackages = showAll ? tourPackages : tourPackages?.slice(0, 6);

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayPackages?.map((pckg) => (
          <FeaturedPackageCard key={pckg._id} pckg={pckg} />
        ))}
      </div>

      {/* যদি Home পেজ হয় (অর্থাৎ showAll false) তবেই বাটনটি দেখাবে */}
      {!showAll && (
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
