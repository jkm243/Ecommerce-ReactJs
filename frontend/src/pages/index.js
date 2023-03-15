import React from 'react'
import Arrivals from '../components/Arrivals.js'
import Hero from '../components/Hero.js'
import Popular from '../components/Popular.js'
import Featured from '../components/Featured.js'
import { Helmet } from 'react-helmet-async'
import Offer from '../components/Offer.js'
import Testimonials from '../components/Testimonials.js'

function Home() {
  return (
    <>
      <Helmet>
        <title>Luka - Shoes Shopping</title>
      </Helmet>
      <Hero />
      <Popular />
      <Arrivals />
      <Featured />
      <Offer />
      <Testimonials />
    </>
  )
}

export default Home