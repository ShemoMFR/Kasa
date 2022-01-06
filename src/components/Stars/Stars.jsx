/* Librairies */
import React, { Component } from 'react';

/* CSS */
import './Stars.css';
import "../../style.css";

class Stars extends Component {
    
    boucle() {
        let stars = [];
        let rest = 5 - this.props.stars;

        for (let i = 0; i < this.props.stars; i++) {
            stars.push(
                <img className='star' src='/starR.png' alt="star" key={i}/>
            )
        }
        
        for (let i = 0; i < rest; i++) {
            stars.push(
                <img className='star' src='/star.png' alt="star" key={5 - i}/>
            ) 
        }

        return stars;
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
