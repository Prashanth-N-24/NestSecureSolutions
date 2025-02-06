import React from 'react'
import Map from "./Map";

const ContactUs = () => {
    return (
        <div name='contact' className='w-full max-w-screen-xl mx-auto  sm:h-[65vh] h-[105vh] relative'>
            <div className='flex flex-col text-center items-center sm:text-left sm:flex-row'>
                <div className='items-center sm:mt-16 mx-10  w- sm:w-[40vW] sm:h-[50vh]'>
                    <h1 className='text-5xl font-bold pt-14 sm:pt-0 sm:pb-3'>Contact Us</h1>
                    <p className='max-w-md text-gray-700 sm:pb-8 pb-4    '>Reach out to us for security that enhance your living experience and provide unmatched convenience and security.</p>
                    <h2 className=' Sm:pb-1 font-bold'>Location</h2>
                    <p className=' text-gray-700 sm:px-0 px-20 flex pb-3'>Billapura, Sarjapura, Anekal, Bangalore - 562125</p>
                    <h2 className=' Sm:pb-1 font-bold'>Phone</h2>
                    <p className=' text-gray-700 pb-3'> +91 8123972747</p>
                    <h2 className=' Sm:pb-1 font-bold'>Email ID</h2>
                    <p className=' text-gray-700 pb-3'>nestsecuresolutions@gmail.com</p>
                    <h2 className=' Sm:pb-1 font-bold'>Hours</h2>
                    <p className=' text-gray-700 pb-3'>9AM - 6PM</p>
                </div>

                <div className="mt-10 border-4 border-yellow-500 items-center rounded-xl  bg-gray-100">
                    <iframe className=' w-[80vw] h-[40vh] sm:w-[40vw] sm:h-[50vh] rounded-xl' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.9905607385454!2d77.78107071099662!3d12.843885987407562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUwJzM4LjAiTiA3N8KwNDcnMDEuMSJF!5e0!3m2!1sen!2sin!4v1738497926557!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
                    <h1 className="text-3xl font-bold text-center absolute top-[100%] ">Our Location</h1>
        </div>
    )
}

export default ContactUs