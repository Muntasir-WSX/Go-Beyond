import React, { useState } from "react";
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
  DollarSign,
  Phone,
  User,
} from "lucide-react";

const AddPackage = () => {
  const { user } = UserAuth();
  const [guideName, setGuideName] = useState(user?.displayName || "");

  const handleAddPackage = async (e) => {
    e.preventDefault();
    const form = e.target;
    const today = format(new Date(), "yyyy-MM-dd");

    const packageData = {
      // editable fields
      tour_name: form.tour_name.value,
      destination: form.destination.value,
      guide_name: form.guide_name.value,
      guide_contact_no: form.guide_contact_no.value,
      image: form.image.value,
      duration: form.duration.value,
      price: parseFloat(form.price.value),
      departure_date: form.departure_date.value,
      departure_location: form.departure_location.value,
      package_details: form.package_details.value,

      // Auto-fill guide info from logged-in user
      guide_email: user?.email,
      guide_photo: user?.photoURL,
      created_at: today,
      bookingCount: 0,
    };

    try {
      const res = await axios.post(
        "https://go-beyond-server-mu.vercel.app//tourPackages",
        packageData
      );
      if (res.data.insertedId) {
        Swal.fire({
          title: "Package Created!",
          text: "Your adventure is now listed on GoBeyond.",
          icon: "success",
          confirmButtonColor: "#ff5e37",
        });
        form.reset();
        setGuideName(user?.displayName);
      }
    } catch (error) {
      toast.error("Process failed. Check your connection.");
    }
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-20 font-sans">
      <AddPackageBanner />

      <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-4xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="bg-[#1a1b2e] p-8 text-center">
            <h2 className="text-2xl font-black text-white uppercase italic">
              Launch Your <span className="text-[#ff5e37]">Package</span>
            </h2>
          </div>

          <form onSubmit={handleAddPackage} className="p-8 md:p-12 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400">
                  Tour Title
                </label>
                <input
                  required
                  name="tour_name"
                  type="text"
                  placeholder="Special Summer Tour"
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#ff5e37] font-bold"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400">
                  Destination
                </label>
                <div className="relative">
                  <MapPin
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ff5e37]"
                    size={18}
                  />
                  <input
                    required
                    name="destination"
                    type="text"
                    placeholder="Sajek, Rangamati"
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#ff5e37] font-bold"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400">
                  Display Guide Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    required
                    name="guide_name"
                    value={guideName}
                    onChange={(e) => setGuideName(e.target.value)}
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#ff5e37] font-bold"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400">
                  Guide Contact No.
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    required
                    name="guide_contact_no"
                    type="text"
                    placeholder="+8801..."
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#ff5e37] font-bold"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400">
                  Banner Image Link
                </label>
                <div className="relative">
                  <ImageIcon
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    required
                    name="image"
                    type="text"
                    placeholder="https://..."
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#ff5e37] font-bold"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400">
                  Package Price (BDT)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-black text-xs">
                    ৳
                  </span>
                  <input
                    required
                    name="price"
                    type="number"
                    placeholder="5500"
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#ff5e37] font-bold"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
                  Duration
                </label>
                <div className="relative">
                  <input
                    required
                    name="duration"
                    type="text"
                    placeholder="3 Days 2 Nights"
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#ff5e37] font-bold"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
                  Travel Date
                </label>
                <div className="relative">
                  <Calendar
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={16}
                  />
                  <input
                    required
                    name="departure_date"
                    type="date"
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#ff5e37] font-bold text-xs uppercase"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
                  Departure From
                </label>
                <div className="relative">
                  <input
                    required
                    name="departure_location"
                    type="text"
                    placeholder="Dhaka"
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#ff5e37] font-bold"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-gray-400">
                Detailed Plan
              </label>
              <textarea
                required
                name="package_details"
                rows="3"
                placeholder="Day 1: Arrival, Day 2: Trekking..."
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#ff5e37] font-bold resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1a1b2e] hover:bg-[#ff5e37] text-white py-5 rounded-2xl font-black uppercase tracking-widest transition-all transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-3"
            >
              <Send size={20} /> Launch Tour Package
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPackage;
