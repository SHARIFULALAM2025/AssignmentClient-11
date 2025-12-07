import React from 'react';
import Navbar from '../Header/Navbar/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../FooterPage/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;