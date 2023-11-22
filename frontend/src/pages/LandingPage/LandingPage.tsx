import { useEffect } from 'react'

import Hero from './components/hero'
import Features from './components/features'
import Newsletter from './components/newsletter'
import Zigzag from './components/zigzag'
import Testimonials from './components/testimonials'

import PageIllustration from './components/page-illustration'
import Footer from './components/ui/footer'
import Header from './components/ui/header'
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
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header/>
        <main className="grow">
          <PageIllustration />

          <Hero />
          <Features />
          <Zigzag />
          <Testimonials />
          <Newsletter />
        </main>

        <Footer />
        <Banner/>
      </div>
    </>
  )
}
