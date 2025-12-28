import React from 'react';
import Story from './Story';
import TeamUs from './TeamUs';
import WhyUs from './WhyUs';
import NotAMember from '../../Shared Components/NotAMember';

const AboutUs = () => {
    return (
        <div>
            {/* Story Section */}
            <Story></Story>
            {/* Team Section */}
            <TeamUs></TeamUs>
            {/* Why Us Section */}
            <WhyUs></WhyUs>
            {/* CTA */}
            <NotAMember></NotAMember>
        </div>
    );
};

export default AboutUs;