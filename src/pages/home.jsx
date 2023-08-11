import React from 'react'
import slide1 from '../assets/slide1.jpg'
import Header from '../components/header/Header';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';
import CardsDatas from '../datas/logements.json';
import Card from '../components/cards/Cards';
import './styles/home.scss'

export default function Home() {
  return (
    <div>

        <Header  />
        <Banner image={slide1} text="Chez vous, partout et ailleurs" />
        <div className='cards_container'>
          {CardsDatas.map((card) => (
              <Card 
              key={card.id}
              id={card.id}
              cover={card.cover}
              title={card.title} 
              />
            )
          )
          }
        </div>
        <Footer />
    </div>
  );
}
