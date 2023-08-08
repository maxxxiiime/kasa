import React, { useState } from 'react'
import IconCollapse from '../../assets/icon-collapse.svg'

export default function Collapse({ title, content }) {

  const [hide, show] = useState(false);

  const toggleCollapse = (event) => {
    console.log("je collapse");
    show(!hide);
};

  return (
    <div className='collapse-bar'>
      <div className='collapse-bar_title'>
        <h2>{title} </h2>
        <div className='to-toggle-collapse'>
          <img src={ IconCollapse }
          alt='icon collapse' 
          className='icon-collapse'
          onClick={toggleCollapse} 
          
          /> 
        </div>
      </div>
      <div className='collapse-bar_text'>
        <p> {content}</p>
      </div>
    </div>
  )
}
