import React from 'react'
import Navbar from './Navbar'
import { HeroSection } from './HeroSection'
import { Scroll } from './Scroll'
import { AboutUs } from './AboutUs'
import { Activities } from './Activities'
import { Blogs } from './Blogs'
import Gallery from './Gallery'
import { MapSection } from './MapSection'
import { ContactUs } from './ContactUs'
import { Footer } from './Footer'

export const MainHead = () => {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <Scroll/>
        <AboutUs/>
        <Activities/>
        {/* <Blogs/> */}
        <Gallery/>
        <MapSection/>
        {/* <ContactUs/> */}
        <Footer/>
    </>
  )
}
