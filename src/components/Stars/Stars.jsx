/* Librairies */
import React, { Component } from 'react';

/* CSS */
import './Stars.css';
import "../../style.css";

/* ICON */
import starg from '../../images/star/star.png'; 
import starR from '../../images/star/starR.png';

class Stars extends Component {

    boucle() {
        let stars = [];
        let rest = 5 - this.props.stars;

        for (let i = 0; i < this.props.stars; i++) {
            stars.push()
        }
        for (let i = 0; i < rest; i++) {
            return <img src={starg} alt='star' className='star' />
        }
    }

    render() {
        return (
            <div className='containerStars'>
                {this.boucle()}
            </div>
        )
    }
}

export default Stars;
