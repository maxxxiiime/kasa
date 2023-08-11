import React from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import CardsDatas from '../datas/logements.json';
import Slider from '../components/slider/Slider';
import slide1 from '../assets/slide1.jpg'
export default function FicheLogement( ) {
  const queryParams = new URLSearchParams(window.location.search)

  const idLog = queryParams.get("id")
  const logement = CardsDatas.filter((card) => { 
  return idLog === card.id;
 })[0]
console.log(logement)
console.log(idLog)


  return (
    <div>
         <Header />
          <Slider />
         <Footer />
       </div>
  )
}
