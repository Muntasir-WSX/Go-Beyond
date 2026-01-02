import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { format } from "date-fns";
import UserAuth from "../CustomHooks/UserAuth";
import AddPackageBanner from "./AddPackageBanner";
import {
  Send,
  Image as ImageIcon,
  MapPin,
  Calendar,
  Phone,
  User,
} from "lucide-react";

const AddPackage = () => {
  const { user } = UserAuth();
  const [guideName, setGuideName] = useState("");
  const [loading, setLoading] = useState(false);

  // Sync guide name when user switches accounts
  useEffect(() => {
    if (user?.displayName) {
      setGuideName(user.displayName);
    }
  }, [user]);

  const handleAddPackage = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const form = e.target;
    const today = format(new Date(), "yyyy-MM-dd");

    const packageData = {
      tour_name: form.tour_name.value,
      destination: form.destination.value,
      guide_name: guideName,
      guide_contact_no: form.guide_contact_no.value,
      image: form.image.value,
      duration: form.duration.value,
      price: parseFloat(form.price.value),
      departure_date: form.departure_date.value,
      departure_location: form.departure_location.value,
      package_details: form.package_details.value,
      guide_email: user?.email,
      guide_photo: user?.photoURL,
      created_at: today,
      bookingCount: 0,
    };

    try {
      const res = await axios.post(
        "https://go-beyond-server-mu.vercel.app/tourPackages",
        packageData,
        { withCredentials: true }
      );

      if (res.data.insertedId) {
        Swal.fire({
          title: "Package Created!",
          text: "Your adventure is now listed on GoBeyond.",
          icon: "success",
          confirmButtonColor: "#ff5e37",
        });
        form.reset();
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Process failed. Please check your connection.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-20 font-sans relative">
      {/* Daisy UI Top Progress Bar */}
      {loading && (
        <progress className="progress progress-error w-full fixed top-0 left-0 z-100 h-1"></progress>
      )}

      <AddPackageBanner />

      <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="bg-[#1a1b2e] p-8 text-center">
            <h2 className="text-2xl font-black text-white uppercase italic">
              Launch Your <span className="text-[#ff5e37]">Package</span>
            </h2>
          </div>

          <form onSubmit={handleAddPackage} className="p-8 md:p-12 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400">Tour Title</label>
                <input required name="tour_name" type="text" placeholder="Special Summer Tour" className="input input-bordered w-full bg-gray-50 focus:outline-[#ff5e37] font-bold" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ff5e37]" size={18} />
                  <input required name="destination" type="text" placeholder="Sajek" className="input input-bordered w-full pl-12 bg-gray-50 focus:outline-[#ff5e37] font-bold" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400">Guide Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input required name="guide_name" value={guideName} onChange={(e) => setGuideName(e.target.value)} className="input input-bordered w-full pl-12 bg-gray-50 focus:outline-[#ff5e37] font-bold" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400">Contact No.</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input required name="guide_contact_no" type="text" placeholder="+8801..." className="input input-bordered w-full pl-12 bg-gray-50 focus:outline-[#ff5e37] font-bold" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400">Banner Image Link</label>
                <div className="relative">
                  <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input required name="image" type="text" placeholder="https://..." className="input input-bordered w-full pl-12 bg-gray-50 focus:outline-[#ff5e37] font-bold" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400">Price (BDT)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-black">৳</span>
                  <input required name="price" type="number" placeholder="5500" className="input input-bordered w-full pl-12 bg-gray-50 focus:outline-[#ff5e37] font-bold" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400">Duration</label>
                <input required name="duration" type="text" placeholder="3 Days / 2 Night" className="input input-bordered w-full bg-gray-50 focus:outline-[#ff5e37] font-bold" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400">Travel Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input required name="departure_date" type="date" className="input input-bordered w-full pl-12 bg-gray-50 focus:outline-[#ff5e37] font-bold text-xs uppercase" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400">From</label>
                <input required name="departure_location" type="text" placeholder="Dhaka" className="input input-bordered w-full bg-gray-50 focus:outline-[#ff5e37] font-bold" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-gray-400">Detailed Plan</label>
              <textarea required name="package_details" rows="3" placeholder="Day 1: Arrival..." className="textarea textarea-bordered w-full bg-gray-50 focus:outline-[#ff5e37] font-bold resize-none"></textarea>
            </div>

            <button
              disabled={loading}
              type="submit"
              className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 
                ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#1a1b2e] hover:bg-[#ff5e37] text-white hover:-translate-y-1"}`}
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-md"></span>
                  Processing...
                </>
              ) : (
                <>
                  <Send size={20} /> Launch Tour Package
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPackage;