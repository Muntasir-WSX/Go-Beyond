import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import UserAuth from "../CustomHooks/UserAuth";
import MyBookingsBanner from "./MyBookingsBanner";
import {
  Calendar,
  User,
  MapPin,
  CheckCircle,
  Phone,
  FileText,
} from "lucide-react";

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
      setLoading(true);
      const res = await axios.get(
        `https://go-beyond-server-mu.vercel.app/myBookings?email=${user.email}`,
        {
          withCredentials: true,
        }
      );
      setBookings(res.data);
    } catch (error) {
      console.error("Error loading bookings", error);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to confirm this trip as completed?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#ff5e37",
      cancelButtonColor: "#1a1b2e",
      confirmButtonText: "Yes, Confirm Trip!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.patch(
            `https://go-beyond-server-mu.vercel.app/bookings/${id}`,
            {},
            { withCredentials: true }
          );
          if (res.data.modifiedCount > 0) {
            toast.success("Trip marked as completed!", {
              style: { background: "#1a1b2e", color: "#fff" },
            });
            fetchBookings();
          }
        } catch (error) {
          toast.error("Failed to update status");
        }
      }
    });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <span className="loading loading-bars loading-lg text-[#ff5e37]"></span>

        <div className="text-xl font-black text-[#ff5e37] animate-pulse tracking-widest uppercase">
          Loading Adventures...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-20 font-sans">
      <MyBookingsBanner />

      <div className="max-w-6xl mx-auto px-4 md:px-6 -mt-12 relative z-10">
        <div className="mb-6 flex items-center justify-between bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h2 className="text-2xl font-black text-[#1a1b2e]">My Bookings</h2>
            <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">
              {bookings.length} booking(s) found
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white rounded-4xl p-6 md:p-8 shadow-xl shadow-gray-200/50 border border-gray-50 hover:border-[#ff5e37]/20 transition-all group"
            >
              {/* Header: Title and Status */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-[#1a1b2e] group-hover:text-[#ff5e37] transition-colors uppercase italic">
                    {booking.tour_name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 font-bold text-xs mt-1 uppercase tracking-wider">
                    <MapPin size={14} className="text-[#ff5e37]" />
                    {booking.departure_location || "Point A"}{" "}
                    <span className="text-[#ff5e37]">→</span>{" "}
                    {booking.destination || "Point B"}
                  </div>
                </div>
                <span
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${
                    booking.status === "completed"
                      ? "bg-[#00a884]/10 text-[#00a884]"
                      : "bg-[#ff5e37]/10 text-[#ff5e37]"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full animate-pulse ${
                      booking.status === "completed"
                        ? "bg-[#00a884]"
                        : "bg-[#ff5e37]"
                    }`}
                  ></div>
                  {booking.status}
                </span>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* Guide */}
                <div className="bg-gray-50/50 p-4 rounded-2xl border border-transparent hover:border-gray-100 transition-all">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                    Guide
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-xl shadow-sm text-[#ff5e37]">
                      <User size={18} />
                    </div>
                    <p className="font-black text-[#1a1b2e] text-sm">
                      {booking.guide_name}
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-gray-50/50 p-4 rounded-2xl border border-transparent hover:border-gray-100 transition-all">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                    Contact
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-xl shadow-sm text-[#ff5e37]">
                      <Phone size={18} />
                    </div>
                    <p className="font-black text-[#1a1b2e] text-sm">
                      {booking.buyer_contact || "+880 1712-XXXXXX"}
                    </p>
                  </div>
                </div>

                {/* Departure */}
                <div className="bg-gray-50/50 p-4 rounded-2xl border border-transparent hover:border-gray-100 transition-all">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                    Departure
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-xl shadow-sm text-[#ff5e37]">
                      <Calendar size={18} />
                    </div>
                    <p className="font-black text-[#1a1b2e] text-sm">
                      {booking.departure_date}
                    </p>
                  </div>
                </div>
              </div>

              {/* Special Notes & Action */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pt-6 border-t border-gray-50">
                <div className="flex-1 w-full">
                  <div className="bg-gray-50/50 p-4 rounded-2xl w-full">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <FileText size={14} className="text-[#ff5e37]" /> Special
                      Notes
                    </p>
                    <p className="text-sm text-gray-600 font-medium italic">
                      {booking.notes || "No special requirements mentioned."}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3 w-full lg:w-auto">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                    Booked on{" "}
                    {new Date(booking.booking_date).toLocaleDateString(
                      "en-US",
                      { month: "short", day: "numeric", year: "numeric" }
                    )}
                  </p>

                  {booking.status === "pending" ? (
                    <button
                      onClick={() => handleConfirm(booking._id)}
                      className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#1a1b2e] hover:bg-[#ff5e37] text-white px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all transform hover:-translate-y-1 shadow-lg shadow-gray-200"
                    >
                      <CheckCircle size={18} /> Confirm Trip
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#00a884] text-white px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest cursor-not-allowed opacity-90 shadow-lg shadow-green-100"
                    >
                      <CheckCircle size={18} /> Completed
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {bookings.length === 0 && (
            <div className="bg-white rounded-4xl p-20 text-center border-2 border-dashed border-gray-100">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={40} className="text-gray-200" />
              </div>
              <h3 className="text-xl font-black text-[#1a1b2e]">
                No Adventures Found
              </h3>
              <p className="text-gray-400 mt-2 font-medium">
                Ready to explore? Book your first trip now!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
