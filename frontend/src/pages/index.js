import React from 'react'
import Arrivals from '../components/Arrivals.js'
import Footer from '../components/Footer.js'
import Hero from '../components/Hero.js'
import Popular from '../components/Popular.js'
import ScrollButton from '../components/ScrollButton.js'
import Featured from '../components/Featured.js'
import { Helmet } from 'react-helmet-async'

function Home() {
  return (
    <>
    <Helmet>
      <title>Luka - Shoes Shopping</title>
    </Helmet>
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