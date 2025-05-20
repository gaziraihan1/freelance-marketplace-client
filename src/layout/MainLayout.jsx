import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <>
        <header className='p-4 md:p-2 lg:py-4 lg:px-0 bg-slate-300 '>
            <Header />
        </header>
        <main className='lg:w-11/12 mx-auto 2xl:w-10/12 p-4 md:p-2 lg:p-0 min-h-[90vh]'>
            <Outlet />
        </main>
        <footer className='p-4 md:p-2 lg:py-4 lg:px-0 bg-slate-800 text-slate-300'>
            <Footer />
        </footer>
        </>
    );
};

export default MainLayout;