import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handlerNav = () => {
        setNav(!nav)
    }
    return (
        <div className='rounded-div fixed top-0 left-0 w-full flex items-center justify-between h-20 font-bold  p-5 z-50 bg-white'>
            <Link to='/'>
                <h1 className='text-2xl'>workTrap</h1>
            </Link>
            <div className='hidden md:block '>
            </div>
            <div className='hidden md:block '>
                <Link to='/' className='p-4 hover:text-teal-700'> Sign In </Link>
                <Link to='/' className='bg-button text-btnText px-5 py-2 ml-2 mr-4  shadow-lg rounded-sm hover:shadow-2xl'> Sign Up </Link>
            </div>


            <div onClick={handlerNav} className='block md:hidden cursor-pointer z-10'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>


            <div className={nav
                ? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in-out duration-500 z-10 bg-white' :
                ' fixed left-[-100%] top-20 h-[90%] justify-between flex flex-col items-center ease-in-out duration-500 bg-white'} >
                <ul className='w-full p-4'>
                    <li className='border-b py-4' onClick={handlerNav}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='border-b py-4' onClick={handlerNav}>
                        <Link to='/workout' >Workout</Link>
                    </li>
                    <li className=' py-4'>
                    </li>
                </ul>
                <div className='flex flex-col w-full p-4'>
                    <Link to='/'> <button className='w-full my-2 p-3 bg-primary text-primary border-secondary rounded-md shadow-2xl'>Sign In</button> </Link>
                    <Link to='/'><button className='w-full my-2 p-3 text-btnText bg-button rounded-md shadow-2xl '> Sign Up</button> </Link>

                </div>
            </div>
        </div>
    )
}

export default Navbar