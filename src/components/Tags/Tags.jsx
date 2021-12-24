/* Librairies */
import React, { Component } from 'react'

/* CSS */
import './Tags.css';
import '../../style.css';

class Tags extends Component {
    render() {
        return (
            <div className='containerTags'>
                { this.props.tags.map(tag => <span className='tag'>{tag}</span>)}
            </div>
        )
    }
}

export default Tags;
