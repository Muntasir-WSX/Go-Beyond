import React from "react";
import { MapPin, Clock, Calendar, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeaturedPackageCard = ({ pckg }) => {
  const { _id, tour_name, image, duration, destination, price, departure_date } = pckg;
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-500">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={tour_name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full shadow-md">
          <p className="text-[#ff5e37] font-bold text-sm">৳ {price}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 text-left">
        <div className="flex items-center gap-2 text-gray-400 text-xs mb-3 uppercase tracking-widest font-bold">
          <MapPin size={14} className="text-[#ff5e37]" />
          {destination}
        </div>
        
        <h3 className="text-xl font-black text-[#1a1b2e] mb-4 line-clamp-1 group-hover:text-[#ff5e37] transition-colors">
          {tour_name}
        </h3>

        <div className="flex items-center justify-between border-t border-gray-50 pt-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Clock size={16} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Calendar size={16} />
            <span>{departure_date}</span>
          </div>
        </div>

        <button 
          onClick={() => navigate(`/tourpackages/${_id}`)}
          className="w-full mt-6 py-3 bg-[#ff5e37] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all duration-300"
        >
          View Details <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default FeaturedPackageCard;