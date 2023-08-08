import React from 'react'
import './card.scss'

export default function Card({ id,cover,title }) {
  return (
    <div className="logement-card">
      <div className='overlay-degrade'></div>  
      <img src={cover} alt={title} className='logement-card_img' />
      <h3>{title} </h3>
    
 
    </div>
  )
}
