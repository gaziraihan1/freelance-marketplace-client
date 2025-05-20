import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
        <div>
            <header className='p-4 md:p-2 lg:py-4 lg:px-0 bg-slate-300 '>
            <Header />
        </header>
            <Outlet/>
            <footer className='p-4 md:p-2 lg:py-4 lg:px-0 bg-slate-800 text-slate-300'>
            <Footer />
        </footer>
        </div>
    );
};

export default AuthLayout;