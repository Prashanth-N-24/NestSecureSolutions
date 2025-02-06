import React from 'react'
import Main from '../components/Main'
import Why from '../components/Why'
// import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        {/* <Header/> */}
        <Main/>
        
        <Why/>
        <Footer/>
    </div>
  )
}

export default Home