import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Anchor, Mail, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SignInPhoto from "../../assets/signInMain.jpg";
import { FcGoogle } from 'react-icons/fc';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Context/AuthProvider';

const SignIn = () => {
    const { logIn, setLoading, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    // প্রাইভেট রুট থেকে আসলে সেই লোকেশন ধরবে, নাহলে হোম পেজ
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                toast.success(`Welcome, ${result.user.displayName}!`, {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "dark",
                });
                // সফল হলে নির্দিষ্ট লোকেশনে রিডাইরেক্ট
                setTimeout(() => navigate(from, { replace: true }), 1000);
            })
            .catch(error => {
                setLoading(false);
                toast.error(error.message);
            });
    };

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                toast.success(`Welcome back, ${result.user.displayName || 'Explorer'}!`, {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "dark",
                    transition: Bounce,
                });

                setTimeout(() => {
                    form.reset();
                    navigate(from, { replace: true });
                }, 1000);
            })
            .catch(error => {
                setLoading(false);
                toast.error("Invalid email or password!", {
                    position: "top-center",
                    theme: "dark",
                });
            });
    };

    return (
        <div className="h-screen w-full flex flex-col lg:flex-row bg-white overflow-hidden">
            <ToastContainer />
            
            {/* --- LEFT SIDE: IMAGE SECTION --- */}
            <div className="hidden lg:flex lg:w-1/2 h-full relative">
                <img src={SignInPhoto} alt="Sign In" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff5e37]/90 via-[#1a1b2e]/70 to-[#1a1b2e]/95"></div>
                
                <div className="relative z-10 w-full h-full p-12 flex flex-col justify-between">
                    <Link to="/" className="flex items-center group w-fit">
                        <Anchor size={28} className="text-white mr-2" />
                        <h1 className="text-2xl font-black tracking-tighter text-white">Go<span className="text-gray-300">Beyond</span></h1>
                    </Link>

                    <div className="space-y-4">
                        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-black text-white leading-tight uppercase tracking-tighter">
                            Experience <br /> <span className="text-[#ff5e37]">Pure Nature</span>
                        </motion.h2>
                        <p className="text-lg text-gray-200 font-medium max-w-sm">Log in to manage your trips and explore packages.</p>
                    </div>
                    <div className="text-gray-400 text-[10px] font-black uppercase tracking-widest">© 2026 GoBeyond Travel</div>
                </div>
            </div>

            {/* --- RIGHT SIDE: FORM SECTION --- */}
            <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-6 md:p-12 bg-white">
                <div className="w-full max-w-md mx-auto">
                    <div className="mb-8 text-left">
                        <h3 className="text-3xl font-black text-[#1a1b2e] uppercase tracking-tighter mb-2">Sign In</h3>
                        <div className="w-12 h-1.5 bg-[#ff5e37] rounded-full"></div>
                    </div>

                    <form onSubmit={handleSignIn} className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input required type="email" name='email' placeholder="Enter Your Email" className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl py-3 pl-11 pr-4 focus:border-[#ff5e37] outline-none font-semibold text-[#1a1b2e] transition-all" />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input required type="password" name='password' placeholder="••••••••" className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl py-3 pl-11 pr-4 focus:border-[#ff5e37] outline-none font-semibold text-[#1a1b2e] transition-all" />
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-[#ff5e37] hover:bg-[#1a1b2e] text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 uppercase text-xs tracking-widest shadow-lg shadow-orange-500/20 active:scale-95">
                            Sign In <ArrowRight size={16} />
                        </button>
                    </form>

                    <div className="relative my-7 text-center">
                        <hr className="border-gray-100" />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Or Continue With</span>
                    </div>

                    <button onClick={handleGoogleSignIn} type="button" className="w-full bg-white border-2 border-gray-100 hover:border-[#1a1b2e] text-[#1a1b2e] font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-3 text-sm active:scale-95">
                        <FcGoogle size={20} />
                        <span>Sign in with Google</span>
                    </button>

                    <p className="mt-8 text-center text-sm font-medium text-gray-500">
                        New explorer? <Link to="/register" state={{ from: location.state?.from }} className="text-[#ff5e37] font-bold hover:underline">Create Account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;