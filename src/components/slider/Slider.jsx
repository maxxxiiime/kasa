import React, { useState } from 'react'
import backArrow from '../../assets/arrow-back.svg';
import nextArrow from '../../assets/arrow-next.svg';



export default function Slider({image}) {

    const [indexSlider, updateIndex] = useState(0);

  return (
    <div className='slider'>
        <img src={image} alt='slider_img' className='slider_img' />
        Slider
    </div>
  )
}
