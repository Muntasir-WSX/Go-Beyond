import React, { useEffect, useState } from "react";
import axios from "axios";
import UserAuth from "../CustomHooks/UserAuth";
import ManageMyPackageBanner from "./ManageMyPackageBanner.jsx";
import { Calendar, Clock, MapPin, Edit3, Trash2, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ManagePackage = () => {
  const { user } = UserAuth();
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = "https://go-beyond-server-mu.vercel.app";

  useEffect(() => {
    if (user?.email) {
      fetchMyPackages();
    }
  }, [user?.email]);

  const fetchMyPackages = async () => {
    try {
      setLoading(true);

      const res = await axios.get(`${baseUrl}/myPackages?email=${user.email}`, {
        withCredentials: true,
      });
      setPackages(res.data);
    } catch (error) {
      console.error("Error fetching packages", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This package will be permanently removed!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff5e37",
      cancelButtonColor: "#1a1b2e",
      confirmButtonText: "Yes, Delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(`${baseUrl}/tourPackages/${id}`, {
            withCredentials: true,
          });
          if (res.data.deletedCount > 0) {
            toast.success("Package deleted successfully");
            fetchMyPackages();
          }
        } catch (error) {
          toast.error("Failed to delete package");
        }
      }
    });
  };
  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] gap-4">
        <span className="loading loading-bars loading-lg text-[#ff5e37]"></span>
        <div className="text-xl font-black text-[#ff5e37] animate-pulse tracking-widest uppercase">
          Loading Your Packages...
        </div>
      </div>
    );

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-20 font-sans">
      <ManageMyPackageBanner />

      <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 bg-white/50 backdrop-blur-md p-6 rounded-3xl border border-white">
          <div>
            <h2 className="text-3xl font-black text-[#1a1b2e]">
              Manage My Packages
            </h2>
            <p className="text-[#ff5e37] font-bold uppercase text-xs tracking-widest mt-1">
              {packages.length} packages created by you
            </p>
          </div>
          <Link
            to="/addPackage"
            className="flex items-center gap-2 bg-[#00a884] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-green-100 hover:bg-[#1a1b2e] transition-all transform active:scale-95"
          >
            <Plus size={18} /> Add New Package
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg._id}
              className="bg-white rounded-[40px] p-6 shadow-xl shadow-gray-100/50 border border-gray-50 flex flex-col md:flex-row gap-8 hover:border-[#ff5e37]/20 transition-all group"
            >
              {/* Image Part */}
              <div className="w-full md:w-72 h-48 shrink-0 overflow-hidden rounded-[30px] relative">
                <img
                  src={pkg.image}
                  alt={pkg.tour_name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#ff5e37] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                    BDT {pkg.price}
                  </span>
                </div>
              </div>

              {/* Info Part */}
              <div className="flex-1 flex flex-col justify-between py-2">
                <div>
                  <h3 className="text-2xl font-black text-[#1a1b2e] group-hover:text-[#ff5e37] transition-colors uppercase italic">
                    {pkg.tour_name}
                  </h3>

                  <div className="flex flex-wrap gap-5 mt-4 text-gray-400 text-[11px] font-black uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-[#ff5e37]" />
                      {pkg.destination}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-[#ff5e37]" />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-[#ff5e37]" />
                      {pkg.departure_date}
                    </div>
                  </div>

                  <p className="mt-4 text-gray-500 text-sm line-clamp-2 font-medium leading-relaxed">
                    {pkg.package_details}
                  </p>
                </div>

                <div className="flex gap-4 mt-8">
                  <Link
                    to={`/updatePackage/${pkg._id}`}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 border-2 border-gray-100 text-[#1a1b2e] px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#1a1b2e] hover:text-white transition-all shadow-sm"
                  >
                    <Edit3 size={16} /> Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(pkg._id)}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#ff5e37]/10 text-[#ff5e37] px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#ff5e37] hover:text-white transition-all"
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}

          {packages.length === 0 && (
            <div className="text-center py-24 bg-white rounded-[40px] border-2 border-dashed border-gray-100 shadow-inner">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Plus size={40} className="text-gray-200" />
              </div>
              <h3 className="text-xl font-black text-[#1a1b2e] uppercase italic">
                No Packages Created Yet
              </h3>
              <p className="text-gray-400 mt-2 font-bold text-sm tracking-widest uppercase">
                Click the button above to start your journey!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagePackage;
