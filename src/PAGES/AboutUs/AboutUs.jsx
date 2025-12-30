import React, { useContext } from 'react';
import Story from './Story';
import TeamUs from './TeamUs';
import WhyUs from './WhyUs';
import NotAMember from '../../Shared Components/NotAMember';
import UserReview from '../../Shared Components/UserRivew'; 
import { AuthContext } from '../../Context/AuthProvider';

const AboutUs = () => {
    const { user, loading } = useContext(AuthContext);

    return (
        <div className="space-y-0">
            
            <Story />
            <TeamUs />
            <WhyUs />
            
          
            {loading ? (
                
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