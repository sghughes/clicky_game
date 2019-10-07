import React from 'react';
import './style.css';

function ImageCard (props) {
    return (
        <div className='card'>
            <div className='img-container'>
                <img alt='imageHolder' src={props.image} clicked='no'/>
            </div>
        </div>

        // <span onClick={() => props.gameClick()}

    );
}
export default ImageCard;