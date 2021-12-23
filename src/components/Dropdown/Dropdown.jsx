/* Librairies */
import React, { Component } from 'react';

/* CSS */
import './Dropdown.css';
import "../../style.css"; 

class Dropdown extends Component {

      render() {
            return (
                  <div className="container1240px">
                        <details class="dropDown">
                            <summary className="dropdownTitle">CSS font-size Animation - Summary<span className='chevron'> {'>'} </span></summary>
                            <div class="content">
                                TEST DE TEXTE QUE JE SOUHAITE VOIR APPARAITRE<br/>
                                TEST DE TEXTE QUE JE SOUHAITE VOIR APPARAITRE<br/>
                            </div>
                        </details>

                  </div>
            )
      }
}

export default Dropdown;
