import React from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';


export default function error() {
  return (
    <div>
        <Header />

            <div className='error'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>

            <a href='./Home'>Retournez sur la page d'accueil</a>
            </div>
        <Footer />

        
        error</div>
  )
}
