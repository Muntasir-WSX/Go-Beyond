import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { AuthContext } from '../Context/AuthProvider'; // পাথ চেক করে নিন

// ছবিগুলো ইম্পোর্ট
import reviewer1 from "../assets/rivewer1.jpg";
import reviewer2 from "../assets/rivewer2.jpg";
import reviewer3 from "../assets/rivewer3.jpg";
import reviewer4 from "../assets/rivewer4.jpg";
import reviewer5 from "../assets/rivewer5.jpg";
import reviewer6 from "../assets/rivewer6.jpg";
import reviewer7 from "../assets/rivewer7.jpg";

const UserReview = () => {
    const { user } = useContext(AuthContext);

    // ইউজার না থাকলে এই সেকশনটি রেন্ডার হবে না
    if (!user) return null;

    const reviews = [
        { id: 1, name: "Dur e Fishan", location: "Sajek Valley", img: reviewer1, rating: 5, comment: "Sajek was dreamlike! The clouds and the resort management were top-notch." },
        { id: 2, name: "Sarwar Islam", location: "Cox's Bazar", img: reviewer2, rating: 4, comment: "Beautiful beach view. The sunset tour arranged by GoBeyond was very well organized." },
        { id: 3, name: "Tanvir Hossain", location: "Saint Martin", img: reviewer3, rating: 5, comment: "Crystal clear water! A moderate budget trip but felt like a luxury experience." },
        { id: 4, name: "Nil Farhan", location: "Bandarban", img: reviewer4, rating: 5, comment: "Nilgiri and Thanchi were breathtaking. Moderate hiking but totally worth it!" },
        { id: 5, name: "Sarah Ali", location: "Rangamati", img: reviewer5, rating: 4, comment: "Kaptai Lake boat ride was peaceful. Hanging bridge was a bit crowded but good." },
        { id: 6, name: "Misu Kabir", location: "Patenga Naval", img: reviewer6, rating: 5, comment: "Quick weekend trip to Naval. The street food and breeze were exactly what I needed." },
        { id: 7, name: "Yasmina ", location: "Kaptai Lake", img: reviewer7, rating: 5, comment: "The lake view from the resort was stunning. Loved every moment of the trip!" },
    ];

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-black text-[#1a1b2e] uppercase tracking-tighter"
                    >
                        What Our <span className="text-[#ff5e37]">Explorers</span> Say
                    </motion.h2>
                    <p className="text-gray-500 mt-2 font-medium uppercase text-[10px] tracking-[0.2em]">Real Stories from Real Travelers</p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((rev, index) => (
                        <motion.div
                            key={rev.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative group hover:bg-[#1a1b2e] transition-all duration-500"
                        >
                            <Quote className="absolute top-6 right-8 text-[#ff5e37] opacity-20 group-hover:opacity-40" size={40} />
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#ff5e37]">
                                    <img src={rev.img} alt={rev.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-black text-[#1a1b2e] group-hover:text-white text-sm uppercase">{rev.name}</h4>
                                    <p className="text-[#ff5e37] text-[10px] font-bold uppercase tracking-widest">{rev.location}</p>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill={i < rev.rating ? "#ff5e37" : "none"} className={i < rev.rating ? "text-[#ff5e37]" : "text-gray-300"} />
                                ))}
                            </div>

                            <p className="text-gray-600 group-hover:text-gray-300 text-sm italic leading-relaxed">
                                "{rev.comment}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UserReview;