import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Service from './components/Service'
import Why from './components/Why'
import Contact from './components/Contact'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Serviceextra from './components/Serviceextra'




function App() {

  return (
    <>
      <Header />
      <Main />  
      <Service />
      <Why />
      <Contact/>
      <ContactUs/>
      <Serviceextra/>
      <Footer/>
    </>
  )
}

export default App
