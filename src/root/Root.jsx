import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/page/footer/Footer';
import Navbar from '../components/page/navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;