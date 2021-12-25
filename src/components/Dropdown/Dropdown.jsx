/* Librairies */
import React, { Component } from 'react';

/* CSS */
import './Dropdown.css';
import "../../style.css"; 

class Dropdown extends Component {
 
      render() {
            return (
				<details className="dropDown">
					<summary className="dropdownTitle">{this.props.name}<span className='chevron'> {'>'} </span></summary>
					<div className="content">
						{ this.props.name === 'Équipements' ?
							<ul style={{listStyleType: "none"}}>
								{this.props.value.map((equip, index) => <li key={index} style={{paddingTop: '5px'}}>{equip}</li>)}
							</ul>
						:
							<p style={{lineHeight: "27px"}}>{this.props.value}</p>
						} 
						
					</div>
				</details>
            )
      }
}

export default Dropdown;
