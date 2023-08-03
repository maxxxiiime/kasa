import React from "react";
import logo from '../../assets/kasa-logo.svg';


function Header() {
    // const title = 'kasa'
    return (
        <div className='nav-header'>

           <img src={logo} alt='kasa logo' className='kasa-logo' />
           
           <div className="navigation">
            <nav>
              <ul>
                <li>
                  Accueil</li>
                <li>
                  A Propos</li>
              </ul>
            </nav>
           </div>

        </div>
    );
}

export default Header