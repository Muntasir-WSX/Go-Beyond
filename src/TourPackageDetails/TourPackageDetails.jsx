import React from 'react';
import { useLoaderData, Link } from 'react-router'; 
import { 
  Calendar, Clock, MapPin, Tag, Mail, 
  Phone, ShieldCheck, CheckCircle2, Navigation, 
  Star, Heart, Share2, Eye, Info, Map 
} from 'lucide-react';
import TourPackageDetailsBanner from './TourPackageDetailsBanner';

const TourPackageDetails = () => {
    const data = useLoaderData();
    const {
        _id, 
        tour_name, 
        image, 
        duration, 
        departure_location, 
        destination, // এটি ব্যবহার করা হয়েছে
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
        <div className="bg-[#fcfcfc] min-h-screen pb-20 font-sans text-[#1a1b2e]">
            {/* ১. ব্যানার সেকশন */}
            <TourPackageDetailsBanner />

            <div className="max-w-7xl mx-auto px-6 py-12 relative z-30">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                    
                    {/* বাম পাশের মেইন কন্টেন্ট */}
                    <div className="lg:col-span-2 space-y-10">
                        
                        {/* ইমেজ এবং ডেসটিনেশন ট্যাগ */}
                        <div className="bg-white p-3 rounded-[2.5rem] shadow-xl border border-gray-100">
                            <div className="relative h-[500px] w-full overflow-hidden rounded-[2rem]">
                                <img 
                                    src={image} 
                                    alt={tour_name} 
                                    className="w-full h-full object-cover"
                                />
                                {/* ডায়নামিক ডেসটিনেশন ব্যাজ */}
                                <div className="absolute top-6 left-6 flex flex-col gap-3">
                                    <div className="bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl flex items-center gap-2 shadow-xl border border-white">
                                        <MapPin size={18} className="text-[#ff5e37]" />
                                        <span className="text-xs font-black uppercase tracking-widest">{destination}</span>
                                    </div>
                                    <div className="bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-2xl flex items-center gap-2 shadow-xl border border-white/20 text-white">
                                        <Eye size={18} className="text-white" />
                                        <span className="text-xs font-black uppercase tracking-widest">{bookingCount} Exploring Now</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* মেইন ইনফো কার্ড */}
                        <div className="bg-white p-10 lg:p-14 rounded-[3rem] border border-gray-100 shadow-sm">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="bg-[#ff5e37]/10 text-[#ff5e37] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Package ID: {_id.slice(-6)}</span>
                                        <div className="flex text-amber-400">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                        </div>
                                    </div>
                                    <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-tight italic">
                                        {tour_name}
                                    </h2>
                                    {/* গন্তব্য এবং যাত্রা শুরুর স্থান */}
                                    <div className="flex items-center gap-4 text-gray-400 font-bold text-sm uppercase tracking-wider">
                                        <span className="flex items-center gap-1"><Navigation size={14}/> {departure_location}</span>
                                        <span>➔</span>
                                        <span className="flex items-center gap-1 text-[#ff5e37]"><Map size={14}/> {destination}</span>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button className="p-4 bg-gray-50 rounded-2xl hover:bg-rose-50 hover:text-rose-500 transition-all border border-gray-100"><Heart size={22} /></button>
                                    <button className="p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 hover:text-blue-500 transition-all border border-gray-100"><Share2 size={22} /></button>
                                </div>
                            </div>

                            <div className="text-gray-600 leading-relaxed font-medium text-lg border-t border-gray-50 pt-8">
                                <h3 className="text-[#1a1b2e] font-black uppercase text-xs tracking-[0.2em] mb-4">About This Journey</h3>
                                {package_details}
                            </div>
                        </div>

                        {/* হাইলাইট গ্রিড (সবগুলো প্রপার্টি এখানে আছে) */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <HighlightCard label="Departure" value={departure_location} icon={<Navigation size={20}/>} />
                            <HighlightCard label="Target Destination" value={destination} icon={<Map size={20}/>} />
                            <HighlightCard label="Tour Start" value={departure_date} icon={<Calendar size={20}/>} />
                            <HighlightCard label="Duration" value={duration} icon={<Clock size={20}/>} />
                        </div>

                        {/* গাইড প্রোফাইল */}
                        <div className="bg-[#1a1b2e] p-10 rounded-[3rem] text-white flex flex-col md:flex-row items-center gap-10 shadow-2xl relative">
                            <img 
                                src={guide_photo} 
                                alt={guide_name} 
                                className="w-36 h-36 rounded-[2rem] object-cover border-4 border-white/10"
                            />
                            <div className="flex-1 space-y-6 text-center md:text-left">
                                <div>
                                    <p className="text-[#ff5e37] text-[10px] font-black uppercase tracking-[0.3em] mb-2">Expert Guide Details</p>
                                    <h4 className="text-4xl font-black uppercase tracking-tighter italic">{guide_name}</h4>
                                </div>
                                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                    <div className="bg-white/5 px-5 py-3 rounded-xl text-[11px] font-bold tracking-wider flex items-center gap-3 border border-white/5">
                                        <Mail size={16} className="text-[#ff5e37]" /> {guide_email}
                                    </div>
                                    <div className="bg-white/5 px-5 py-3 rounded-xl text-[11px] font-bold tracking-wider flex items-center gap-3 border border-white/5">
                                        <Phone size={16} className="text-[#ff5e37]" /> {guide_contact_no}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ডান পাশের স্টিকি বুকিং কার্ড */}
                    <div className="lg:col-span-1 h-full">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-white p-10 lg:p-12 rounded-[3.5rem] shadow-2xl shadow-gray-200/40 border border-gray-100 text-center">
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] block mb-6">Price Per Expedition</span>
                                <div className="mb-10">
                                    <span className="text-7xl font-black text-[#1a1b2e] tracking-tighter">${price}</span>
                                    <span className="text-sm font-bold text-gray-400 ml-1 uppercase">/ Person</span>
                                </div>

                                <Link to={`/book-package/${_id}`}>
                                    <button className="w-full bg-[#ff5e37] hover:bg-[#1a1b2e] text-white font-black py-6 rounded-[2rem] transition-all duration-500 uppercase tracking-widest text-xs shadow-xl active:scale-95">
                                        Confirm Your Spot
                                    </button>
                                </Link>
                                
                                <div className="mt-8 pt-8 border-t border-gray-50 space-y-4">
                                    <BenefitItem text="Professional Guide" />
                                    <BenefitItem text="Luxury Accommodation" />
                                    <BenefitItem text="Daily Gourmet Meals" />
                                    <BenefitItem text="All Transport Costs" />
                                </div>

                                <p className="mt-8 text-[9px] text-gray-300 font-bold uppercase tracking-widest leading-tight">
                                    Package Created: {new Date(created_at).toLocaleDateString()}
                                </p>
                            </div>
                            
                            <div className="bg-[#ff5e37] p-6 rounded-[2rem] text-white flex items-center justify-between shadow-lg">
                                <div className="flex items-center gap-4">
                                    <ShieldCheck size={24} />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Travel Insurance <br/> Fully Covered</span>
                                </div>
                                <Info size={18} className="opacity-50" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const HighlightCard = ({ label, value, icon }) => (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center space-y-2 hover:border-[#ff5e37]/30 transition-all duration-300">
        <div className="text-[#ff5e37] flex justify-center mb-1">{icon}</div>
        <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest leading-none">{label}</p>
        <p className="text-[#1a1b2e] font-bold text-xs uppercase tracking-tight line-clamp-1">{value}</p>
    </div>
);

const BenefitItem = ({ text }) => (
    <div className="flex items-center gap-3 text-[10px] font-black text-gray-500 uppercase tracking-tight px-2">
        <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
        <span>{text}</span>
    </div>
);

export default TourPackageDetails;