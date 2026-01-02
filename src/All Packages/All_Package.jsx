import React, { Suspense } from "react";
import { motion } from "framer-motion"; // ১. এই লাইনটি অবশ্যই লাগবে
import AllPackagesBanner from "./AllPackagesBanner";
import FeaturedPackages from "../PAGES/HOME/FeaturedPackages";
import Partners from "../Shared Components/Partners";

const All_Package = () => {
  // প্রমিজটি এখানে ঠিক আছে, তবে রেন্ডারিং অপ্টিমাইজেশনের জন্য এটি কম্পোনেন্টের বাইরে রাখা যায়
  const allPackagesPromise = fetch("https://go-beyond-server-mu.vercel.app//tourPackages").then(
    (res) => res.json()
  );

  return (
    <div className="bg-gray-50 flex flex-col gap-20 lg:gap-32">
      {/* ১. Banner Section */}
      <section>
        <AllPackagesBanner />
      </section>

      {/* ২. All Packages Grid Section */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#ff5e37] font-bold italic text-lg lg:text-2xl block mb-2"
            style={{ fontFamily: "cursive" }}
          >
            ~ Journey Through Paradise ~
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#1a1b2e] uppercase tracking-tight"
          >
            Explore All Destinations
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-[#ff5e37] mt-4 mb-8"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto italic leading-relaxed"
          >
            "From the majestic hills of Chittagong to the crystal waters of the
            Bay, find the perfect escape from our wide range of exclusive tour
            packages."
          </motion.p>
        </div>

        <Suspense
          fallback={
            <div className="text-center py-20 text-xl font-bold text-[#ff5e37] animate-pulse">
              Loading all packages...
            </div>
          }
        >
          <FeaturedPackages
            tourpackagePromise={allPackagesPromise}
            showAll={true}
          />
        </Suspense>
      </section>

      {/* ৩. Partners Section */}
      <section className="pb-20 lg:pb-32">
        <Partners />
      </section>
    </div>
  );
};

export default All_Package;