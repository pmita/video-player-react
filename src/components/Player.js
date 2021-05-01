import React from 'react';
//Importing Fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

function Player(){
    //Event Handlers
    const playVideoHandler = () => {
        console.log('button work');
    }
    return(
        <div className="videos-container">
            <input type="range" class="video-length" min="" max=""/>
            <div className="player-buttons">
                <FontAwesomeIcon className="play-previous" size="2x" icon={faPlay} />
                <FontAwesomeIcon onClick={playVideoHandler} className="play" size="2x" icon={faPlay} />
                <FontAwesomeIcon className="play-next" size="2x" icon={faPlay} />
            </div>
            
        </div>
    );
}

export default Player;