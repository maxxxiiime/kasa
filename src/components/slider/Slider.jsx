import React, { useState } from 'react'
import backArrow from '../../assets/arrow-back.svg';
import nextArrow from '../../assets/arrow-next.svg';
import './slider.scss'


export default function Slider({image}) {

    const [indexSlider, updateIndex] = useState(0);

    const nextSlide = () => {
      updateIndex(indexSlider === image.length -1 ? 0 : indexSlider +1)
      console.log(indexSlider);
    }

  return (
    <div className='slider'>
        <img src={image[indexSlider]} alt='slider_img' className='slider_img' />
     
    
    </div>
  )
}
