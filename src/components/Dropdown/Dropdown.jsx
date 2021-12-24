/* Librairies */
import React, { Component } from 'react';

/* CSS */
import './Dropdown.css';
import "../../style.css"; 

class Dropdown extends Component {

	componentDidMount () {
		console.log(this.props)
	}

      render() {
            return (
                  <div className="container1240px">
                        <details class="dropDown">
					{this.props.equipements ? 
						<summary className="dropdownTitle">Équipements<span className='chevron'> {'>'} </span></summary>
					:
						<summary className="dropdownTitle">Description<span className='chevron'> {'>'} </span></summary>
					}
                            <div class="content">
						{this.props.equipements ?
							<ul style={{listStyleType: "none"}}>
								{this.props.equipements.map(equip => <li style={{paddingTop: '5px'}}>{equip}</li>)}
							</ul>
						:
							<p style={{lineHeight: "27px"}}>{this.props.description}</p>
						}
                            </div>
                        </details>

                  </div>
            )
      }
}

export default Dropdown;
