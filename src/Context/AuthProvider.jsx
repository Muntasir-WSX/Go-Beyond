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
    axios.defaults.withCredentials = true;

    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            const baseUrl = 'https://go-beyond-server-mu.vercel.app';

            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axios.post(`${baseUrl}/jwt`, userInfo)
                    .then(res => {
                        console.log("Token response success");
                        setLoading(false);
                    })
                    .catch(err => {
                        console.error("JWT Error:", err);
                        setLoading(false);
                    });
            } else {
                axios.post(`${baseUrl}/logout`, {})
                    .then(() => {
                        setLoading(false);
                    })
                    .catch(err => {
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