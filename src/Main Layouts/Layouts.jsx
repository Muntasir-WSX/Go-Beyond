import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../Shared Components/Nav';
import Footer from '../Shared Components/Footer';

const Layouts = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layouts;