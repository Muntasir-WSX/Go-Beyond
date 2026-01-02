import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserAuth from '../CustomHooks/UserAuth';
import ManageMyPackageBanner from './manageMyPackageBanner';
import { Calendar, Clock, MapPin, Edit3, Trash2, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const ManagePackage = () => {
    const { user } = UserAuth();
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetchMyPackages();
        }
    }, [user?.email]);

    const fetchMyPackages = async () => {
        try {
            // আপনার ব্যাকএন্ডের ৮ নম্বর API: app.get('/myPackages')
            const res = await axios.get(`https://go-beyond-server-mu.vercel.app//myPackages?email=${user.email}`);
            setPackages(res.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching packages", error);
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
            confirmButtonText: "Yes, Delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    // আপনার ব্যাকএন্ডের ৯ নম্বর API: app.delete('/tourPackages/:id')
                    const res = await axios.delete(`https://go-beyond-server-mu.vercel.app//tourPackages/${id}`);
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

    if (loading) return <div className="text-center py-20 font-black text-[#ff5e37]">LOADING...</div>;

    return (
        <div className="bg-[#fcfcfc] min-h-screen pb-20">
            <ManageMyPackageBanner />

            <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h2 className="text-3xl font-black text-[#1a1b2e]">Manage My Packages</h2>
                        <p className="text-gray-500 font-bold">{packages.length} packages created</p>
                    </div>
                    {/* আপনার রুট অনুযায়ী: /add-package */}
                    <Link to="/add-package" className="flex items-center gap-2 bg-[#00a884] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-[#008f6f] transition-all">
                        <Plus size={20} /> Add New Package
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {packages.map((pkg) => (
                        <div key={pkg._id} className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
                            <div className="w-full md:w-64 h-44 shrink-0">
                                <img src={pkg.image} alt="" className="w-full h-full object-cover rounded-2xl" />
                            </div>

                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-black text-[#1a1b2e]">{pkg.tour_name}</h3>
                                    <span className="bg-[#ff5e37] text-white px-3 py-1 rounded-lg text-xs font-black">
                                        BDT {pkg.price}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-4 mt-3 text-gray-500 text-sm font-bold">
                                    <div className="flex items-center gap-1.5">
                                        <MapPin size={16} /> {pkg.departure_location} → {pkg.destination}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock size={16} /> {pkg.duration}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={16} /> {pkg.departure_date}
                                    </div>
                                </div>

                                <p className="mt-3 text-gray-400 text-sm line-clamp-2 italic">
                                    {pkg.package_details}
                                </p>

                                <div className="flex gap-3 mt-6">
                                    {/* Edit বাটনের জন্য একটি নতুন রুট চিন্তা করা হয়েছে */}
                                    <Link 
                                        to={`/update-package/${pkg._id}`}
                                        className="flex items-center gap-2 border-2 border-blue-100 text-blue-600 px-5 py-2 rounded-xl font-black text-xs hover:bg-blue-600 hover:text-white transition-all"
                                    >
                                        <Edit3 size={16} /> Edit
                                    </Link>
                                    <button 
                                        onClick={() => handleDelete(pkg._id)}
                                        className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-xl font-black text-xs shadow-md hover:bg-red-600 transition-all"
                                    >
                                        <Trash2 size={16} /> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManagePackage;