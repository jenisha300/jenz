import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Story from './components/Story/Story'
import AppStore from './components/AppStore/AppStore'
import Menu from './components/Menu/Menu'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'



const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <Story/>
    <Menu/>
    <Testimonial/>
    <AppStore/>
    <Footer/>
    </>
  )
}

export default App