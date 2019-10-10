import React from 'react';
import './style.css';

function ImageCard (props) {
    return (
        <div className='card'>
            {/* <span onClick={() => props.clickedImage(props.id)} className="image"> */}
            <div className='img-container'>
                <img alt='imageHolder' src={props.image} clicked='no' id={props.id} onClick={() => props.clickedImage(props.id)} className="image" />
            </div>
            {/* </span> */}
        </div>



    );
}
export default ImageCard;