/* Librairies */
import React, { Component } from 'react'

/* CSS */
import './Tags.css';
import '../../style.css';

class Tags extends Component {
    render() {
        return (
            <div className='containerTags'>
                { this.props.tags.map((tag, index) => <div key={index} className='tag'><div>{tag}</div></div>)}
            </div>
        )
    }
}

export default Tags;
