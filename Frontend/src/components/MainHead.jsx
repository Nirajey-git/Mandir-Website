import React from 'react'
import Navbar from './Navbar'
import { HeroSection } from './HeroSection'
import { AboutUs } from './AboutUs'
import { Activities } from './Activities'
import { Blogs } from './Blogs'
import Gallery from './Gallery'
import { MapSection } from './MapSection'
import { ContactUs } from './ContactUs'
import { Footer } from './Footer'
import { Routes, Route } from 'react-router-dom'

export const MainHead = () => {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <AboutUs/>
        <Activities/>
        <Blogs/>
        <Gallery/>
        <MapSection/>
        <ContactUs/>
        <Footer/>
    </>
  )
}
