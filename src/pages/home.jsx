import React from 'react'
import slide1 from '../assets/slide1.jpg'
import Header from '../components/header/Header';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';


export default function Home() {
  return (
    <div>

        <Header  />
        <Banner image={slide1} text="Chez vous, partout et ailleurs" />
        <Footer />
    </div>
  );
}
