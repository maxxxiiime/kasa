import React, { useState } from 'react'
import IconCollapse from '../../assets/icon-collapse.svg'
import './collapse.scss';

export default function Collapse({ title, content }) {
const [hide, show] = useState(false);

  const hideorShow = (event) => {
    // className={collapse__arrow ${isOpen ? "rotate" : "anti-rotate"}}
    console.log("je collapse");
    show(!hide);
};
  return (
    
    <div className='collapse-bar'>
        <div className='collapse-bar_title'>
          <h2>{title}</h2>
          <div className='to-toggle-collapse'>
              <img src={IconCollapse}
                alt='icon collapse' 
                className={`icon-collapse ${hide ? "rotate" : ""}`}
                onClick={hideorShow} 
              /> 

          </div>
        </div>
      {hide&& (
      <div className={`collapse-bar_text ${hide ? "show-text" : ""}`}>
        <p> {content}</p>
      </div>
      )}
    </div>
  )
}
