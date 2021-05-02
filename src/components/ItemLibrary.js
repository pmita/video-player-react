import React from 'react';

const ItemLibrary = ({video}) => {
    return(
        <div className="item-container">
            <img src="https://images.pexels.com/photos/3616590/pexels-photo-3616590.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="video thumbnail" />
            <h3>{video.title}</h3>
            <h4>{video.artist}</h4>
        </div>
    );
}

export default ItemLibrary;