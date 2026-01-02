import React, { createContext, useEffect, useState } from 'react';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut, 
    GoogleAuthProvider, 
    signInWithPopup 
} from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init.js';
import axios from 'axios';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // ১. রেজিস্ট্রেশন
    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // ২. লগইন
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // ৩. গুগল লগইন
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // ৪. লগ-আউট
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // ৫. বর্তমানে কোন ইউজার আছে কি না তা পর্যবেক্ষণ করা + JWT Cookie সেট করা
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("Current User Observed:", currentUser);

            if (currentUser) {
                // ইউজার থাকলে ব্যাকএন্ডে ইমেইল পাঠিয়ে কুকি সেট করা
                const userInfo = { email: currentUser.email };
                axios.post('https://go-beyond-server-mu.vercel.app//jwt', userInfo, { withCredentials: true })
                    .then(res => {
                        console.log("Token response:", res.data);
                        setLoading(false);
                    })
                    .catch(err => {
                        console.error("JWT Error:", err);
                        setLoading(false);
                    });
            } else {
                // ইউজার না থাকলে (লগআউট করলে) কুকি রিমুভ করা
                axios.post('https://go-beyond-server-mu.vercel.app//logout', {}, { withCredentials: true })
                    .then(() => {
                        setLoading(false);
                    });
            }
        });
        return () => unSubscribe();
    }, []);

    const authInfo = {
        user, 
        creatUser,
        logIn,
        googleSignIn,
        logOut,
        loading,
        setLoading
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;