import React from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = React.useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center bg-white">
                <span className="loading loading-bars loading-lg text-[#ff5e37]"></span>
            </div>
        );
    }

    if (!user) {
        // state এ পুরো location অবজেক্টটি পাঠানো হলো
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoutes;