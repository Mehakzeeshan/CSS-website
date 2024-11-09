import React from 'react'
import Navbar from './components/navbar';
import HeroSection from './components/heroSection';
import ShopSection from './components/shopSection';
import Footer from './components/footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ShopSection />
      <Footer />
    </div>
  )
}

export default Home;