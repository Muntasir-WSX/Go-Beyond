import React, { useContext } from 'react';
import Story from './Story';
import TeamUs from './TeamUs';
import WhyUs from './WhyUs';
import NotAMember from '../../Shared Components/NotAMember';
import UserReview from '../../Shared Components/UserRivew'; // বানান চেক করুন
import { AuthContext } from '../../Context/AuthProvider';

const AboutUs = () => {
    const { user, loading } = useContext(AuthContext);

    return (
        <div className="space-y-0">
            {/* এই সেকশনগুলো সবসময় রেন্ডার হবে */}
            <Story />
            <TeamUs />
            <WhyUs />
            
            {/* কন্ডিশনাল পার্ট */}
            {loading ? (
                // লোড হওয়ার সময় এই জায়গাটি খালি থাকবে অথবা ছোট একটি স্পিনার
                <div className="h-20"></div> 
            ) : user ? (
                <UserReview />
            ) : (
                <NotAMember />
            )}
        </div>
    );
};

export default AboutUs;