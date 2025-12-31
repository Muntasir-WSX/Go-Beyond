import React from 'react';
import MyBookingsBanner from './MyBookingsBanner';

const MyBookings = () => {
    return (
        <div>
            {/* banner+booked package with confirmation btn */}
            {/* banner */}
            <MyBookingsBanner></MyBookingsBanner>
        </div>
    );
};

export default MyBookings;