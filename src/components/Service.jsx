import React from 'react'
import { Link } from 'react-scroll'
import cctv from '../assets/cctv.jpg'
import Networking from '../assets/Networking.jpg'
import SplashCursor from './SplashCursor'


const Service = () => {

    const serv = [
        {
            id: 1,
            src: cctv,
            title: 'CCTV SECURITY',
            para: ' Check-in on your home from anywhere - no more "Did I lock the door" panic.',
            link: ''
        },
        {
            id: 2,
            src: Networking,
            title: 'NETWORKING',
            para: 'Check-in on your home from anywhere - no more "Did I lock the door" panic.2',
            link: ''
        },
        {
            id: 3,
            src: cctv,
            title: 'CCTV SECURITY',
            para: 'Check-in on your home from anywhere - no more "Did I lock the door" panic.3',
            link: ''
        },
        {
            id: 4,
            src: Networking,
            title: 'NETWORKING',
            para: 'Check-in on your home from anywhere - no more "Did I lock the door" panic.4',
            link: ''
        },
        {
            id: 5,
            src: cctv,
            title: 'CCTV SECURITY',
            para: 'Check-in on your home from anywhere - no more "Did I lock the door" panic.5',
            link: ''
        },

        {
            id: 6,
            src: Networking,
            title: 'NETWORKING',
            para: 'Check-in on your home from anywhere - no more "Did I lock the door" panic.6',
            link: ''
        }
    ]

    return (
        <div name="service" className='w-full sm:h-[125vh]   pt-14 '>
            {/* <SplashCursor /> */}
            <div className='flex justify-center'>
                <h2 className='text-5xl  font-bold border-b-4 border-yellow-300 inline '>Services</h2>
            </div>

            {/* <div className='flex sm:mx-40 sm:shadow-xl sm:border-white/90 border'> */}
            <div className='flex max-w-screen-xl mx-auto  sm:shadow-xl sm:border-white/90 border'>
                <div className=' w-full grid grid-cols-1 place-items-center sm:grid-cols-3  py-8 '>
                    {
                        serv.map(({ id, src, title, para, link }) => (
                            <div key={id} className="relative mt-6 mx-2   ">
                                <img className='brightness-50 sm:rounded-2xl rounded-2xl bg-contain sm:w-[24vw] sm:h-[48vh] w-[50vh] h-72 hover:scale-105 duration-500' src={src} alt="" />
                                <div className="absolute bottom-5 left-5 my-4 text-white">
                                    <h1 className="text-2xl font-semibold font-sans mb-2">{title} </h1>
                                    <p className="text-sm mb-4 py-2">{para}</p>
                                    <Link className="px-11 py-3   text-sm font-medium border border-white rounded-full hover:bg-white hover:text-black transition">
                                        See more
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Service