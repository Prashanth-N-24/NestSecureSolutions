import {Link} from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import React, { useState } from 'react'


const Header = () => {

    const [nav,setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'home'
            
        },
        {
            id: 2,
            link: 'service'
        },
        {
            id: 1,
            link: 'about'
        },
        {
            id: 1,
            link: 'contact'
        },
    ]

    return (
        <div name="header" className='fixed flex justify-between items-center w-full h-20 text-white bg-black/50 backdrop-blur-lg shadow-md z-50 border-yellow-500 border-b-4 rounded-b-3xl px-2
         sm:justify-around sm:border-b-4 sm:border-yellow-500 '>
            <div>
                <h1 className='text-2xl font-serif ml-8 '>NestSecure</h1>
            </div>

            <ul className='hidden md:flex hover:'>
                {links.map(({ id, link }) => (
                    <li key={id} className='px-8 cursor-pointer capitalize font-medium text-white-500 hover:scale-105 duration-200'>
                        <Link to={link} smooth duration={500}>{link}
                            
                        </Link>
                    </li>
                ))}
            </ul>
           
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-black-500 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
      </div>

      {nav && (
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b bg-yellow-500 text-black-500 '>

      {links.map(({id,link}) =>(
          <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}

              </Link>

            </li>
        ))}
      </ul>
      )}
    

        </div>
    )
}

export default Header