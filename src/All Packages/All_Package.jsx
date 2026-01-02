import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import AllPackagesBanner from "./AllPackagesBanner";
import FeaturedPackages from "../PAGES/HOME/FeaturedPackages";
import Partners from "../Shared Components/Partners";
import { Search, Filter, SortAsc, ArrowUpDown } from "lucide-react";

const All_Package = () => {
  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Search & Sort States
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    const fetchAllPackages = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://go-beyond-server-mu.vercel.app/tourpackages",
          { withCredentials: true }
        );
        setPackages(response.data);
        setFilteredPackages(response.data); // Initial data
      } catch (error) {
        console.error("API Error:", error.response || error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAllPackages();
  }, []);

  // Handle Search & Sort Logic
  useEffect(() => {
    let result = [...packages];

    // 1. Search Logic (Name or Destination)
    if (searchTerm) {
      result = result.filter((pkg) =>
        pkg.tour_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.destination.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 2. Sort Logic
    if (sortType === "price-low-to-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortType === "price-high-to-low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortType === "name-asc") {
      result.sort((a, b) => a.tour_name.localeCompare(b.tour_name));
    }

    setFilteredPackages(result);
  }, [searchTerm, sortType, packages]);

  return (
    <div className="bg-gray-50 flex flex-col gap-10 lg:gap-20">
      <section>
        <AllPackagesBanner />
      </section>

      <section className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-10 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-[#1a1b2e] uppercase tracking-tight"
          >
            Explore All Destinations
          </motion.h2>
          <div className="h-1.5 w-20 bg-[#ff5e37] mt-4 mb-8"></div>
        </div>

        {/* Search and Sort Controls - DaisyUI Input & Select */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          
          {/* Search Box */}
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by tour name or destination..."
              className="input input-bordered w-full pl-12 focus:outline-[#ff5e37] bg-gray-50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <ArrowUpDown className="text-[#ff5e37]" size={20} />
            <select 
              className="select select-bordered w-full md:w-64 focus:outline-[#ff5e37] bg-gray-50 font-bold"
              onChange={(e) => setSortType(e.target.value)}
              value={sortType}
            >
              <option value="">Sort By (Default)</option>
              <option value="price-low-to-high">Price: Low to High</option>
              <option value="price-high-to-low">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* Packages Grid Area */}
        <div className="min-h-100">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <span className="loading loading-bars loading-xl text-[#ff5e37]"></span>
              <p className="text-[#ff5e37] font-bold animate-pulse">Loading Awesome Packages...</p>
            </div>
          ) : filteredPackages.length > 0 ? (
            <FeaturedPackages packages={filteredPackages} showAll={true} />
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png" alt="not found" className="w-32 mx-auto mb-4 opacity-20" />
              <p className="text-gray-500 text-xl font-medium">No packages match your search or filters.</p>
              <button onClick={() => {setSearchTerm(""); setSortType("");}} className="mt-4 text-[#ff5e37] font-bold underline">Clear All Filters</button>
            </motion.div>
          )}
        </div>
      </section>

      <section className="pb-20 lg:pb-32">
        <Partners />
      </section>
    </div>
  );
};

export default All_Package;