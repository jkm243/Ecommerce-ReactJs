import React from 'react'
import Arrivals from '../components/Arrivals.js'
import Footer from '../components/Footer.js'
import Hero from '../components/Hero.js'
import Popular from '../components/Popular.js'
import ScrollButton from '../components/ScrollButton.js'
import Featured from '../components/Featured.js'

function Home() {
  return (
    <>
        <Hero/>
        <Popular/>
        <Arrivals/>
        <Featured/>
        <Footer/>
        <ScrollButton/>
    </>
  )
}

export default Home