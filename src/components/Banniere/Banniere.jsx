/* Librairies */ 
import React from 'react';

/* CSS */
import ".././../style.css";
import "./Banniere.css";

class Banniere extends React.Component {

      render() {
            return (
                  <div>
                        { 
                              this.props.page === 'home' ?
                              <div className="banniereHome">
                                    <div className="txtBanniereHome">Chez vous, partout et ailleurs</div>
                              </div>
                              :
                              <div className="banniereHome2"></div>                        
                        }
                  </div>
            )
      }
}

export default Banniere;