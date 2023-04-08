import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <div>
                <h1 className='text-6xl font-bold text-center text-blue-500'>Welcome to by Restaurant</h1>
            </div>
        </div>
    );
};

export default Home;