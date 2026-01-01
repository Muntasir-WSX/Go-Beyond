import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import UserAuth from '../CustomHooks/UserAuth';
import MyBookingsBanner from './MyBookingsBanner';
import { Calendar, User, MapPin, CheckCircle } from 'lucide-react';

const MyBookings = () => {
    const { user } = UserAuth();
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetchBookings();
        }
    }, [user?.email]);

    const fetchBookings = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/myBookings?email=${user.email}`);
            setBookings(res.data);
            setLoading(false);
        } catch (error) {
            console.error("Error loading bookings", error);
            setLoading(false);
        }
    };

    const handleConfirm = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to mark this tour as completed?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#ff5e37",
            cancelButtonColor: "#1a1b2e",
            confirmButtonText: "Yes, complete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axios.patch(`http://localhost:3000/bookings/${id}`);
                    if (res.data.modifiedCount > 0) {
                        toast.success("Tour marked as completed!");
                        fetchBookings(); // রিফ্রেশ ডাটা
                    }
                } catch (error) {
                    toast.error("Failed to update status");
                }
            }
        });
    };

    if (loading) return <div className="text-center py-20 font-bold text-[#ff5e37]">Loading Your Adventures...</div>;

    return (
        <div className="bg-[#fcfcfc] min-h-screen pb-20">
            <MyBookingsBanner />
            
            <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="bg-[#1a1b2e] p-6 text-white flex justify-between items-center">
                        <h2 className="text-xl font-black uppercase tracking-widest italic">
                            My <span className="text-[#ff5e37]">Bookings</span>
                        </h2>
                        <span className="bg-[#ff5e37] text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                            Total: {bookings.length}
                        </span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-50 text-gray-400 text-[10px] uppercase font-black tracking-widest border-b">
                                <tr>
                                    <th className="p-6">Tour Details</th>
                                    <th className="p-6">Guide Info</th>
                                    <th className="p-6">Schedule</th>
                                    <th className="p-6">Status</th>
                                    <th className="p-6 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {bookings.map((booking) => (
                                    <tr key={booking._id} className="hover:bg-gray-50 transition-colors">
                                        {/* Tour Name & Image */}
                                        <td className="p-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden hidden md:block">
                                                    <img src={booking.tour_image || 'https://via.placeholder.com/150'} alt="" className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-[#1a1b2e] leading-tight">{booking.tour_name}</p>
                                                    <div className="flex items-center gap-1 text-[10px] text-gray-400 mt-1 uppercase font-bold">
                                                        <MapPin size={12} className="text-[#ff5e37]" />
                                                        {booking.departure_location || 'Not Set'} → {booking.destination || 'TBA'}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Guide Info */}
                                        <td className="p-6">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                                    <User size={14} className="text-[#ff5e37]" /> {booking.guide_name}
                                                </span>
                                                <span className="text-[11px] text-gray-400 italic mt-0.5">{booking.guide_email}</span>
                                            </div>
                                        </td>

                                        {/* Schedule */}
                                        <td className="p-6">
                                            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                                                <Calendar size={14} className="text-[#ff5e37]" />
                                                {booking.departure_date}
                                            </div>
                                        </td>

                                        {/* Status */}
                                        <td className="p-6">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                                                booking.status === 'completed' 
                                                ? 'bg-green-100 text-green-600' 
                                                : 'bg-orange-100 text-[#ff5e37]'
                                            }`}>
                                                {booking.status}
                                            </span>
                                        </td>

                                        {/* Action Button */}
                                        <td className="p-6 text-right">
                                            {booking.status === 'pending' ? (
                                                <button 
                                                    onClick={() => handleConfirm(booking._id)}
                                                    className="bg-[#1a1b2e] hover:bg-[#ff5e37] text-white text-[10px] font-black uppercase px-4 py-2 rounded-lg transition-all transform hover:scale-105"
                                                >
                                                    Confirm Tour
                                                </button>
                                            ) : (
                                                <div className="flex items-center justify-end gap-1 text-green-600 font-bold text-[10px] uppercase">
                                                    <CheckCircle size={14} /> Completed
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    {bookings.length === 0 && (
                        <div className="p-20 text-center">
                            <p className="text-gray-400 font-medium">No bookings found. Start your journey today!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyBookings;