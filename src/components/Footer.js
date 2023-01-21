import React from 'react'
import {AiFillLinkedin,AiFillInstagram,AiFillTwitterSquare,AiFillFacebook,AiFillCopyrightCircle} from 'react-icons/ai'
const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='xl:w-[80%] mx-auto flex flex-col xl:flex-row gap-4'>
                <div className='md:w-[50%] ml-2 p-2'>
                    <p className='text-2xl font-bold py-4'>shubStore</p>
                    <p className=''>We are the best when it comes to the sales and quality of the product. Always available to give you the best and affordable products in the market. Visit the About section to know more about us.</p>
                </div>
                <div className='md:w-[50%] flex xl:justify-start md:justify-start ml-2 justify-center items-center p-2 gap-6'>
                    <div className=' p-2 cursor-pointer'><AiFillInstagram size={30} /></div>
                    <div className=' p-2 cursor-pointer'><AiFillFacebook size={30} /></div>
                    <div className=' p-2 cursor-pointer'><AiFillLinkedin size={30} /></div>
                    <div className=' p-2 cursor-pointer'><AiFillTwitterSquare size={30} /></div>
                </div>
            </div>

            <div className='p-5 shadow-2xl  border-t-2'>
                    <div className='flex items-center justify-center gap-2'><AiFillCopyrightCircle size={15} /><span> 2022-2023                    shubStore | All Rights Reserved.</span></div>
                </div>

        </div>
    )
}

export default Footer