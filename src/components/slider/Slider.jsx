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
    const backSlide = () => {
      updateIndex(indexSlider === 0 ? image.length - 1 : indexSlider -1)
      console.log(indexSlider);
    }
    //Numero de l'image dans le slider
    // const indexSliderNum = indexSlider; 
    const allImages = image.length; 

  return (
    <div className='slider'>
        <img src={image[indexSlider]} alt='slider_img' className='slider_img' />
     
        <div className='nav-slide'>
              <img src={nextArrow} alt='next slide' className="next-slide"
                onClick={nextSlide} 
              /> 
            
              <img src={backArrow} alt='back slide' className="back-slide"
                onClick={backSlide} 
              /> 
        </div>
        <div className='index-slider'>
          <p>
            {indexSlider}/{allImages}
          </p>
        </div>

    </div>
  )
}
