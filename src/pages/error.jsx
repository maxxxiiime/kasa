import React from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { NavLink } from 'react-router-dom'
import './styles/error.scss'


export default function Error() {
  return (
    <div>
        <Header />

            <div className='error'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to={"/"} className='back-home'>
            <a href='#'>Retourner sur la page d’accueil</a>
            </NavLink>
            {/* <a href='./Home'>Retourner sur la page d'accueil</a> */}
            </div>
        <Footer />

        
        error</div>
  )
}
