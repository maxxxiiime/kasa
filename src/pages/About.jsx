import React from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Banner from '../components/banner/Banner';
import slide2 from '../assets/slide2.jpg'

export default function About() {
  return (
    <div>
<Header />
<Banner image={slide2} />
      <h1>à propos</h1>
      <Footer />
    </div>
  )   
}
