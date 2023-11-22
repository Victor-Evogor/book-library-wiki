import { useEffect } from 'react'

import Hero from './components/hero'
import Features from './components/features'
import Newsletter from './components/newsletter'
import Zigzag from './components/zigzag'
import Testimonials from './components/testimonials'

import Footer from './components/ui/footer'
import Banner from './components/banner'
import './css/style.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>

          

          <Hero />
          <Features />
          <Zigzag />
          <Testimonials />
          <Newsletter />


        <Footer />
        <Banner/>

    </>
  )
}
