/* Librairies */ 
import React from 'react';

/* CSS */
import "../../style.css";
import "./Footer.css";

/* Logo */ 
import Logo from '../../images/Logos/logoB.png';

class Footer extends React.Component {

      render() {
            return (
                  <div className="containerFooter">
                        <div className="container1240px footer">
                              <img className="footerImg" src={Logo} alt="Kasa footer" />
                              <p className='footerTxt'>© 2020 Kasa. All rights reserved</p>
                        </div>
                  </div>
            )
      }
}

export default Footer;