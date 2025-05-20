import { AlignRight, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
    const user = false;
    const [menu, setMenu] = useState(false)

    return (
        <nav className='flex justify-between lg:w-11/12 mx-auto 2xl:w-10/12 items-center'>
           <div>
            <h2>
                TaskMP
            </h2>
            </div> 
            <div className='lg:hidden' onClick={() => setMenu(!menu)}>
                {
                    menu ? <X className='cursor-pointer'/> : <AlignRight className='cursor-pointer'/>
                }
            </div>
             <ul className={`flex bg-slate-300 flex-col gap-4 absolute p-6 rounded-lg ${menu ? 'top-16 right-2' : 'hidden'} lg:hidden text-center`} >
                <li>
                    <NavLink to={'/'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/add-task'}>
                        Add Task
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/browse-task'}>
                        Browse Tasks
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/my-posted-task'}>
                        My Posted Tasks
                    </NavLink>
                </li>
                {
                    user ? <><li><NavLink>Profile</NavLink></li><li className='py-1 rounded-2xl border border-red-500 hover:text-gray-700'><button>Logout</button></li></>: <><li className='py-1 rounded-2xl border border-gray-500 hover:text-gray-700'><NavLink to='/auth/login'>Login</NavLink></li><li  className='py-1 rounded-2xl border border-gray-500 hover:text-gray-700'><NavLink to='/auth/signup'>Signup</NavLink></li></>
                }
            </ul>
            <ul className='hidden lg:flex gap-6 xl:gap-8 2xl:gap-12 '>
                <li>
                    <NavLink to={'/'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/add-task'}>
                        Add Task
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/browse-task'}>
                        Browse Tasks
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/my-posted-task'}>
                        My Posted Tasks
                    </NavLink>
                </li>
                
                
            </ul>
            <div className='hidden lg:block'>
                {
                    user ? <div className='flex gap-2'>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <button>
                            Logout
                        </button>
                    </div>: <div className='flex gap-2'>
                    
                    <Link to='/auth/login'><button className='bg-blue-600 text-white px-6 py-2 rounded cursor-pointer'>
                    Login
                    </button>
                    </Link>
                
                
                    <Link to='/auth/signup'><button className='bg-blue-800 text-white px-6 py-2 rounded cursor-pointer'>
                    Signup
                 </button>   
                 </Link>
                
                </div>
                }
            </div>
        </nav>
    );
};

export default Header;