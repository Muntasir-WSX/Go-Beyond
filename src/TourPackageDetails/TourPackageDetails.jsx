import React from 'react';
import { useLoaderData } from 'react-router';
import { 
  Calendar, Clock, MapPin, Tag, Mail, 
  Phone, ShieldCheck, CheckCircle2, Navigation, 
  Star, Heart, Share2, Info, Eye
} from 'lucide-react';
import TourPackageDetailsBanner from './TourPackageDetailsBanner';

const TourPackageDetails = () => {
    const data = useLoaderData();
    const {
        tour_name,
        image,
        duration,
        departure_location,
        destination,
        price,
        departure_date,
        package_details,
        guide_name,
        guide_email,
        guide_photo,
        guide_contact_no,
        bookingCount,
        created_at
    } = data;

    return (
        <div className="bg-[#f8f9fa] min-h-screen pb-20 font-sans text-[#1a1b2e]">
            {/* Banner Section */}
            <TourPackageDetailsBanner />

            <div className="max-w-7xl mx-auto px-6 mt-16relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* 2. Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        
                        {/* Main Image Display Card */}
                        <div className="bg-white p-4 rounded-4xl shadow-sm border border-gray-100">
                            <div className="relative h-100 w-full overflow-hidden rounded-3xl">
                                <img 
                                    src={image} 
                                    alt={tour_name} 
                                    className="w-full h-full object-cover shadow-inner"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                                    <Eye size={16} className="text-[#ff5e37]" />
                                    <span className="text-xs font-bold uppercase tracking-widest">{bookingCount} People Viewing</span>
                                </div>
                            </div>
                        </div>

                        {/* Tour Title Section */}
                        <div className="bg-white p-8 lg:p-10 rounded-4xl border border-gray-100 shadow-sm">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-4xl font-black uppercase tracking-tight mb-2 italic">
                                        {tour_name}
                                    </h2>
                                    <div className="flex items-center gap-4 text-gray-400">
                                        <div className="flex items-center gap-1">
                                            <MapPin size={16} className="text-[#ff5e37]" />
                                            <span className="text-sm font-bold uppercase">{destination}</span>
                                        </div>
                                        <span className="text-gray-200">|</span>
                                        <div className="flex items-center gap-1">
                                            <Star size={16} className="text-amber-400 fill-amber-400" />
                                            <span className="text-sm font-bold uppercase">4.9 (Top Rated)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-3 border border-gray-100 rounded-2xl hover:bg-gray-50"><Heart size={20}/></button>
                                    <button className="p-3 border border-gray-100 rounded-2xl hover:bg-gray-50"><Share2 size={20}/></button>
                                </div>
                            </div>

                            <p className="text-gray-600 text-lg leading-relaxed border-t border-gray-50 pt-6">
                                {package_details}
                            </p>
                        </div>

                        {/* Information Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <HighlightCard label="Starting From" value={departure_location} icon={<Navigation size={18}/>} />
                            <HighlightCard label="Journey Date" value={departure_date} icon={<Calendar size={18}/>} />
                            <HighlightCard label="Tour Duration" value={duration} icon={<Clock size={18}/>} />
                            <HighlightCard label="Package Type" value="Luxury" icon={<Tag size={18}/>} />
                        </div>

                        {/* Guide Section  */}
                        <div className="bg-[#1a1b2e] p-8 lg:p-10 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-8">
                            <img 
                                src={guide_photo} 
                                alt={guide_name} 
                                className="w-32 h-32 rounded-3xl object-cover border-4 border-white/5"
                            />
                            <div className="flex-1 space-y-4">
                                <div>
                                    <p className="text-[#ff5e37] text-[10px] font-black uppercase tracking-[0.3em] mb-1">Your Professional Guide</p>
                                    <h4 className="text-3xl font-black uppercase tracking-tight">{guide_name}</h4>
                                </div>
                                <div className="flex flex-wrap gap-4 pt-2">
                                    <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-xl text-sm border border-white/5">
                                        <Mail size={14} className="text-[#ff5e37]" /> {guide_email}
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-xl text-sm border border-white/5">
                                        <Phone size={14} className="text-[#ff5e37]" /> {guide_contact_no}
                                    </div>
                                </div>
                            </div>
                            <ShieldCheck size={48} className="text-[#ff5e37] opacity-20 hidden lg:block" />
                        </div>
                    </div>

                    {/* 3. Right Side Static Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50">
                            <p className="text-center text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Total Package Price</p>
                            <div className="text-center mb-8">
                                <span className="text-6xl font-black text-[#1a1b2e] tracking-tighter">${price}</span>
                                <span className="text-sm font-bold text-gray-400 ml-1 italic">/ person</span>
                            </div>

                            <div className="space-y-4 mb-10 border-t border-b border-gray-50 py-8">
                                <BenefitItem text="Premium Transportation" />
                                <BenefitItem text="Daily Breakfast & Dinner" />
                                <BenefitItem text="All Sightseeing Tickets" />
                                <BenefitItem text="24/7 Dedicated Support" />
                            </div>

                            <button className="w-full bg-[#ff5e37] hover:bg-[#1a1b2e] text-white font-black py-5 rounded-2xl transition-all duration-300 uppercase tracking-widest text-sm shadow-lg shadow-orange-100">
                                Confirm Your Spot
                            </button>

                            <p className="mt-6 text-[10px] text-center text-gray-300 font-bold uppercase tracking-widest leading-tight">
                                Secured by SSL Encryption <br/>
                                <span className="text-gray-400">Added on: {new Date(created_at).toLocaleDateString()}</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const HighlightCard = ({ label, value, icon }) => (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 text-center space-y-1 shadow-sm">
        <div className="text-[#ff5e37] flex justify-center mb-1">{icon}</div>
        <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest">{label}</p>
        <p className="text-[#1a1b2e] font-bold text-xs uppercase tracking-tight">{value}</p>
    </div>
);

const BenefitItem = ({ text }) => (
    <div className="flex items-center gap-3 text-[11px] font-black text-gray-500 uppercase tracking-tight px-2">
        <CheckCircle2 size={14} className="text-emerald-500" />
        <span>{text}</span>
    </div>
);

export default TourPackageDetails;