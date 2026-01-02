import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import UserAuth from '../CustomHooks/UserAuth';
import BookPackageBanner from './BookPackageBanner';
import axios from 'axios';
import toast from 'react-hot-toast';

const BookPackage = () => {
    const { id: packageId } = useParams();
    const { user } = UserAuth();
    const navigate = useNavigate();
    const [tour, setTour] = useState(null);
    useEffect(() => {
        axios.get(`https://go-beyond-server-mu.vercel.app/tourpackages/${packageId}`)
            .then(res => setTour(res.data))
            .catch(err => console.error("Error fetching package:", err));
    }, [packageId]);

    const handleBooking = async (e) => {
        e.preventDefault();
        const form = e.target;

        const bookingData = {
            tour_id: packageId,
            tour_name: tour?.tour_name,
            tour_image: tour?.image, 
            price: tour?.price,
            guide_name: tour?.guide_name,
            guide_email: tour?.guide_email,
            buyer_name: user?.displayName,
            buyer_email: user?.email,
            buyer_contact: form.contact.value,
            booking_date: new Date(),
            departure_date: tour?.departure_date,
            notes: form.notes.value,
            status: "pending"
        };

        try {
            const res = await axios.post(
                'https://go-beyond-server-mu.vercel.app/bookings', 
                bookingData, 
                { withCredentials: true }
            );
            if (res.data.insertedId || res.status === 200) {
                toast.success('Booking Successful!', {
                    duration: 3000,
                    style: {
                        border: '1px solid #ff5e37',
                        padding: '16px',
                        color: '#ffffff',
                        background: '#1a1b2e',
                        fontWeight: 'bold'
                    },
                    iconTheme: {
                        primary: '#ff5e37',
                        secondary: '#ffffff',
                    },
                });

                setTimeout(() => {
                    navigate('/my-bookings'); 
                }, 2000);
            }
        } catch (error) {
            console.error("Full Axios Error:", error.response?.data || error.message);
            toast.error('Failed to book. Please try again.', {
                style: {
                    background: '#1a1b2e',
                    color: '#fff',
                    border: '1px solid #ff0000',
                }
            });
        }
    };

    return (
        <div className="bg-[#fcfcfc] min-h-screen pb-20 font-sans">
            <BookPackageBanner />

            {/* --- Form Section --- */}
            <section className="max-w-4xl mx-auto px-6 mb-20 -mt-10 relative z-30">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                    
                    <div className="bg-[#1a1b2e] p-8 text-white text-center">
                        <h3 className="text-3xl font-black uppercase italic tracking-tighter">
                            Confirm <span className="text-[#ff5e37]">Reservation</span>
                        </h3>
                    </div>

                    <form onSubmit={handleBooking} className="p-8 lg:p-12 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            {/* Tour Name (Read Only) */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-gray-400 tracking-widest">Selected Tour</label>
                                <input type="text" value={tour?.tour_name || ''} readOnly className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl font-bold outline-none cursor-not-allowed text-[#1a1b2e]" />
                            </div>

                            {/* Price (Read Only) - UPDATED TO BDT ৳ */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-gray-400 tracking-widest">Price Per Person</label>
                                <input type="text" value={`৳${tour?.price || ''}`} readOnly className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl text-[#ff5e37] font-black outline-none cursor-not-allowed" />
                            </div>

                            {/* Buyer Name (Read Only) */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-gray-400 tracking-widest">Full Name</label>
                                <input type="text" value={user?.displayName || ''} readOnly className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl font-medium outline-none cursor-not-allowed" />
                            </div>

                            {/* Buyer Email (Read Only) */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-gray-400 tracking-widest">Email Address</label>
                                <input type="email" value={user?.email || ''} readOnly className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl font-medium outline-none cursor-not-allowed" />
                            </div>

                            {/* Buyer Contact (REQUIRED) */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-gray-400 tracking-widest">Your Contact No.</label>
                                <input name="contact" type="tel" placeholder="+880 1XXX-XXXXXX" required className="w-full border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-[#ff5e37] focus:border-transparent outline-none transition-all" />
                            </div>

                            {/* Departure Date */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-gray-400 tracking-widest">Departure Date</label>
                                <input type="text" value={tour?.departure_date || ''} readOnly className="w-full bg-gray-100 border border-gray-100 p-4 rounded-xl outline-none text-gray-500 font-bold" />
                            </div>
                        </div>

                        {/* Special Note */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-gray-400 tracking-widest">Special Note (Optional)</label>
                            <textarea name="notes" rows="3" placeholder="Any specific requirements?" className="w-full border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-[#ff5e37] focus:border-transparent outline-none transition-all"></textarea>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full bg-[#ff5e37] text-white font-black uppercase tracking-widest py-5 rounded-2xl shadow-xl hover:bg-[#1a1b2e] transform hover:-translate-y-1 transition-all duration-300 active:scale-95">
                            Book This Package Now
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default BookPackage;