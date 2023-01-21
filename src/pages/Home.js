import React, { useEffect, useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { MainContext } from '../context/MainContext'

const Home = () => {


    return (
        <div className='pt-20'>
            <div className='md:w-[90%] w-full mx-auto'>
                <div className='relative justify-center items-center text-center'>
                    <div className='w-full md:h-screen h-screen shadow-xl rounded-sm'>
                        <img className='h-full w-full object-cover' src='https://images.pexels.com/photos/3112004/pexels-photo-3112004.jpeg?auto=compress&cs=tinysrgb&w=1600' />
                    </div>
                    <div className='absolute top-24 text-center w-full'>
                        <h1 className='text-4xl xl:text-7xl font-bold text-white p-3'>Welcome to the Club</h1>
                      
                        <h1 className='text-2xl xl:text-6xl xl:py-4 p-2 text-white font-bold'>Get Your Exercise Routine </h1>
                        <div className=' px-6 py-4 text-2xl font-bold bg-red-400 hover:bg-red-200 cursor-pointer w-fit mx-auto mt-20 xl:mt-40'>
                        <Link to='/workout' >Let's Go</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home