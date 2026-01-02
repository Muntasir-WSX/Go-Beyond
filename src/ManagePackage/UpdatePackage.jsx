import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import AddPackageBanner from "../ADD Package/AddPackageBanner"; // পাথ চেক করে নেবেন
import {
  Send,
  Image as ImageIcon,
  MapPin,
  Calendar,
  Phone,
  User,
  RotateCcw,
} from "lucide-react";

const UpdatePackage = () => {
  const loadedPackage = useLoaderData(); // রাউটার লোডার থেকে আসা ডাটা
  const navigate = useNavigate();

  // গাইড নাম এডিটেবল রাখার জন্য স্টেট
  const [guideName, setGuideName] = useState(loadedPackage?.guide_name || "");

  const handleUpdatePackage = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedPackageData = {
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
    };

    try {
      // আপনার ব্যাকএন্ডের ১০ নম্বর API অনুযায়ী: PATCH /updateTourPackage/:id
      const res = await axios.patch(
        `https://go-beyond-server-mu.vercel.app//updateTourPackage/${loadedPackage._id}`,
        updatedPackageData
      );

      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "Successfully Updated!",
          text: "Your tour package information has been modified.",
          icon: "success",
          confirmButtonColor: "#ff5e37",
        });
        navigate("/manage-packages"); // আপডেট শেষে ম্যানেজ পেজে ফেরত যাবে
      } else {
        toast.error("No changes were made.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update. Please try again.");
    }
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-20 font-sans">
      <AddPackageBanner />

      <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-4xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="bg-[#1a1b2e] p-8 text-center">
            <h2 className="text-2xl font-black text-white uppercase italic">
              Modify Your <span className="text-[#ff5e37]">Adventure</span>
            </h2>
            <p className="text-gray-400 text-xs font-bold mt-2 tracking-widest uppercase">
              ID: {loadedPackage._id}
            </p>
          </div>

          <form onSubmit={handleUpdatePackage} className="p-8 md:p-12 space-y-6">
            {/* ট্যুর ও গন্তব্য */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400">
                  Tour Title
                </label>
                <input
                  required
                  name="tour_name"
                  type="text"
                  defaultValue={loadedPackage?.tour_name}
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
                    defaultValue={loadedPackage?.destination}
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#ff5e37] font-bold"
                  />
                </div>
              </div>
            </div>

            {/* গাইড ইনফো */}
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
                    defaultValue={loadedPackage?.guide_contact_no}
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#ff5e37] font-bold"
                  />
                </div>
              </div>
            </div>

            {/* ইমেজ ও প্রাইস */}
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
                    defaultValue={loadedPackage?.image}
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
                    defaultValue={loadedPackage?.price}
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#ff5e37] font-bold"
                  />
                </div>
              </div>
            </div>

            {/* ডেট ও লোকেশন */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
                  Duration
                </label>
                <input
                  required
                  name="duration"
                  type="text"
                  defaultValue={loadedPackage?.duration}
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#ff5e37] font-bold"
                />
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
                    defaultValue={loadedPackage?.departure_date}
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#ff5e37] font-bold text-xs uppercase"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
                  Departure From
                </label>
                <input
                  required
                  name="departure_location"
                  type="text"
                  defaultValue={loadedPackage?.departure_location}
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#ff5e37] font-bold"
                />
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
                defaultValue={loadedPackage?.package_details}
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#ff5e37] font-bold resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 bg-[#1a1b2e] hover:bg-[#ff5e37] text-white py-5 rounded-2xl font-black uppercase tracking-widest transition-all transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-3"
              >
                <RotateCcw size={20} /> Update Package
              </button>
              <button
                type="button"
                onClick={() => navigate("/manage-packages")}
                className="px-8 py-5 rounded-2xl font-black uppercase text-xs border-2 border-gray-100 text-gray-400 hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePackage;