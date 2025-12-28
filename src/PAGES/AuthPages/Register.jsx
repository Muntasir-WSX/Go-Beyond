import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Mail, Lock, User, UserPlus, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import registerImg from "../../assets/login.jpg";
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    return (
        <div className="h-screen w-full flex flex-col lg:flex-row bg-white overflow-hidden">
            
            {/* --- LEFT SIDE: FORM SECTION --- */}
            <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-6 md:p-10 bg-white order-2 lg:order-1 overflow-y-auto lg:overflow-hidden">
                <div className="w-full max-w-md mx-auto py-8 lg:py-0">
                    <div className="mb-5">
                        <Link to="/signin" className="inline-flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-[#ff5e37] mb-3 transition-colors">
                            <ArrowLeft size={12} /> Back to Login
                        </Link>
                        <h3 className="text-3xl font-black text-[#1a1b2e] uppercase tracking-tighter mb-2">Register</h3>
                        <div className="w-12 h-1.5 bg-[#ff5e37] rounded-full"></div>
                    </div>

                    <form className="space-y-3">
                        {/* Name Field */}
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl py-2.5 pl-11 pr-4 focus:border-[#ff5e37] outline-none font-semibold text-[#1a1b2e] transition-all text-sm" />
                            </div>
                        </div>

                        {/* Photo URL Field */}
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">Photo URL</label>
                            <div className="relative">
                                <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input type="text" placeholder="https://example.com/photo.jpg" className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl py-2.5 pl-11 pr-4 focus:border-[#ff5e37] outline-none font-semibold text-[#1a1b2e] transition-all text-sm" />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input type="email" placeholder="email@example.com" className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl py-2.5 pl-11 pr-4 focus:border-[#ff5e37] outline-none font-semibold text-[#1a1b2e] transition-all text-sm" />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input type="password" placeholder="••••••••" className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl py-2.5 pl-11 pr-4 focus:border-[#ff5e37] outline-none font-semibold text-[#1a1b2e] transition-all text-sm" />
                            </div>
                            <p className="text-[9px] text-gray-400 font-medium leading-tight pt-1">
                                * Min 6 chars, include uppercase & lowercase letters.
                            </p>
                        </div>

                        <button className="w-full bg-[#1a1b2e] hover:bg-[#ff5e37] text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 uppercase text-xs tracking-widest shadow-lg mt-2 active:scale-95">
                            Create Account <UserPlus size={16} />
                        </button>
                    </form>

                    <div className="relative my-5 text-center">
                        <hr className="border-gray-100" />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest">Or Register With</span>
                    </div>

                    <button className="w-full bg-white border-2 border-gray-100 hover:border-[#ff5e37] text-[#1a1b2e] font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-3 text-sm active:scale-95">
                        <FcGoogle size={20} />
                        <span className="tracking-tight">Sign up with Google</span>
                    </button>

                    <p className="mt-5 text-center text-xs font-medium text-gray-500">
                        Joined already? <Link to="/signin" className="text-[#ff5e37] font-bold hover:underline">Sign In Here</Link>
                    </p>
                </div>
            </div>

            {/* --- RIGHT SIDE: IMAGE SECTION --- */}
            <div className="hidden lg:flex lg:w-1/2 h-full relative order-1 lg:order-2">
                <img src={registerImg} alt="Register" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-bl from-[#ff5e37]/90 via-[#1a1b2e]/70 to-[#1a1b2e]/95"></div>
                
                <div className="relative z-10 w-full h-full p-12 flex flex-col justify-between items-end text-right">
                    <Link to="/" className="flex items-center group w-fit">
                        <h1 className="text-2xl font-black tracking-tighter text-white">Go<span className="text-gray-300">Beyond</span></h1>
                        <Anchor size={28} className="text-white ml-2" />
                    </Link>
                    <div className="space-y-4">
                        <h2 className="text-5xl font-black text-white leading-tight uppercase tracking-tighter">Explore <br /> <span className="text-[#ff5e37]">New Horizons</span></h2>
                        <p className="text-lg text-gray-200 font-medium max-w-sm ml-auto">Unlock exclusive travel deals with your new account.</p>
                    </div>
                    <div className="text-gray-400 text-[10px] font-black uppercase tracking-widest">© 2025 GoBeyond Travel</div>
                </div>
            </div>
        </div>
    );
};

export default Register;