import React from 'react'
// import SpotlightCard from './SpotlightCard';

const Why = () => {
    return (
        <div name="why" className='w-full h-[105vh] sm:h-[80vh] pt-14'>z
            {/* <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.8)"> */}
            <div className='flex justify-center'>
                <h2 className='text-5xl text-black  font-bold border-b-4 border-yellow-300 inline '>Why NestSecure ?</h2>
            </div>

            <div className='pt-10 gap flex justify-center gap-2  sm:flex-row flex-col'>


                <img className=' sm:w-[36vw] sm:h-[52vh] w-[80vw] ml-10  rounded-2xl bg-contain' src="src/assets/WhyNS.jpg" alt="" />


                <div className='ml-14  w-[80vw] sm:w-[36vw] sm:h-[52vh]  sm:pl-20 py-2  sm:flex sm:flex-col sm:justify-center '>
                    <h3 className='py-2 font-semibold text-xl' >First Heading </h3>
                    <p className='max-w-md pb-6 text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsam accusantium dolore  dolor pariatur? </p>
                    <h3 className='py-2 font-semibold text-xl' >First Heading </h3>
                    <p className='max-w-md pb-6 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsam accusantium dolore  dolor pariatur? </p>
                    <h3 className='py-2 font-semibold text-xl' >First Heading </h3>
                    <p className='max-w-md pb-6 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsam accusantium dolore  dolor pariatur? </p>
                </div>
            </div>
        {/* </SpotlightCard> */}
        </div>
    )
}

export default Why