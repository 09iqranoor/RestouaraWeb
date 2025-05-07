import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Dishes from './components/Dishes'
import About from './components/About'
import Mission from './components/Mission'
import Expertise from './components/Expertise'
import Review from './components/Review'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <main className=' overflow-y-hidden text-neutral-200  antialiased'>
      <HeroSection />
      <Navbar/>
      <Dishes/>
      <About/>
      <Mission/>
      <Expertise/>
      <Review/>
      <ContactSection/>
      <Footer/>
      </main>
     </div>
  )
} 

export default App