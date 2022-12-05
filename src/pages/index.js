import React from 'react'
import Arrivals from '../components/Arrivals.js'
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import Hero from '../components/Hero.js'
import Popular from '../components/Popular.js'
import ScrollButton from '../components/ScrollButton.js'

function Home() {
  return (
    <>
        <Header/>
        <Hero/>
        <Popular/>
        <Arrivals/>
        <Footer/>
        <ScrollButton/>
    </>
  )
}

export default Home