import React from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Banner from '../components/banner/Banner';
import slide2 from '../assets/slide2.jpg'
import Collapse from '../components/collapse/Collapse';

export default function About() {
  return (
    <div>
    <Header />

    <Banner image={slide2} />
          <h1>à propos</h1>

          <div className='about_collapse_content'>
    <Collapse  title=" testte"
              content="on verra plus tard bnalablaa on verra plus tard bnalablaa on verra plus tard bnalablaaon verra plus tard bnalablaa" />
        </div>
    <Footer />
    </div>
  )   
}
