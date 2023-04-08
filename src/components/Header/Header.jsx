import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between my-10 max-w-7xl mx-auto'>
            <div className='text-2xl font-bold'>
            <NavLink className={({ isActive }) => isActive ?  " bg-gray-300 px-5 rounded" : ""} to="/">Home</NavLink>
            </div>
            <div className='inline-flex gap-6  text-2xl font-bold'>
                <NavLink className={({ isActive }) => isActive ?  " bg-gray-300 px-5 rounded" : ""} to="/about">About</NavLink>
                <NavLink className={({ isActive }) => isActive ?  "  bg-gray-300 px-5 rounded" : ""}  to="/posts">Posts</NavLink>
                <NavLink className={({ isActive }) => isActive ?  "  bg-gray-300 px-5 rounded" : ""}  to="/meals">Restaurant</NavLink>
            </div>
            {/* <Outlet></Outlet> */}
        </div>
    );
};

export default Header;