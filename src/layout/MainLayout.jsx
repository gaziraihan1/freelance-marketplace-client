import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const MainLayout = () => {
    return (
        <>
        <header className='p-4 md:p-2 lg:py-4 lg:px-0 bg-slate-300 '>
            <Header />
        </header>
        <main>
            <Outlet />
        </main>
        </>
    );
};

export default MainLayout;