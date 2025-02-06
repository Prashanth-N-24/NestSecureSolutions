import React from 'react'
import { Link } from 'react-scroll'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AnimatedContent from './AnimatedContent'
import TrueFocus from './TrueFocus';
import SplashCursor from './SplashCursor'

const Main = () => {
    return (
        <div name="home">

            <img name="home" className=' bg-cover bg-fixed w-full h-screen brightness-50' src="aicopy.jpg" alt="mainpic" />

            <div>
                <div className='flex justify-center sm:flex sm:justify-start' >
                    <h1 className=' font-bold text-7xl absolute top-32 text-white 
                ml-12 sm:text-8xl sm:ml-16  sm:top-56 '>
                        <TrueFocus />
                    </h1>
                    <p className='px-16 font-bold text-3xl absolute top-96 text-white 
                sm:text-4xl sm:top-96 sm:max-w-4xl sm:ml-'>Protecting what matters most with 24/7 CCTV security and peace of mind. </p>
                    <AnimatedContent />

                </div>

                <div className='flex flex-col sm:flex-row justify-center sm:justify-start sm:ml-16'>
                    <Link to="services" className='group flex  top-3/4 sm:top-2/3  absolute rounded-md px-6 py-3
            items-center w-fit border-2 text-white hover:bg-white hover:text-black duration-300 cursor-pointer'>Learn more
                        <span className='group-hover:rotate-90 duration-200'>
                            <MdOutlineKeyboardArrowRight size={25} />
                        </span>
                    </Link>

                    <Link className='flex   top-3/4 sm:top-2/3  absolute rounded-md text-white
            items-center w-fit border-2 hover:bg-white  hover:text-black border-white ml-60 px-6 py-3  cursor-pointer'>Book Free Consultation</Link>


                </div>
            </div>
        </div>

    )
}

export default Main