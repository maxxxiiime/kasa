import React, { useEffect } from 'react';
import logo from '../../assets/kasa-logo.svg';
import './header.scss'
import { NavLink } from 'react-router-dom'

function Header() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
        <div className='nav-header'>

           <img src={logo} alt='kasa logo' className='kasa-logo' />
           
           <div className="navigation-menu">
            <nav>
              <ul>
              <NavLink to={"/"}>
              <li>Accueil</li>
              </NavLink>
              <NavLink to={"/about"}>
              <li>A Propos</li>
              </NavLink>
              </ul>
            </nav>
           </div>

        </div>
    );
}

export default Header