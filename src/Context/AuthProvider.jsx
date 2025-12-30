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

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // ইউজারের সব ডাটা এখানে থাকবে
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

    // ৫. বর্তমানে কোন ইউজার আছে কি না তা পর্যবেক্ষণ করা (অবশ্যই লাগবে)
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Current User Observed:", currentUser);
            setUser(currentUser); // ইউজারের সব ডাটা (নাম, ছবি, ইমেইল) এখানে সেভ হবে
            setLoading(false);
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