import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/page/footer/Footer';
import Header from '../components/page/header/Header';

const Root = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;