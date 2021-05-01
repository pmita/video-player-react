import React, {useRef} from 'react';
//Importing Fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'

function VideoPlayer({currentVideo, setCurrentVideo, isPlaying, setIsPlaying}) {
    /*-------References-----------------*/
    const videoRef = useRef(null);
    /*-------Event Handelers------------*/
    const playVideoHandler = () => {
        if(isPlaying === false){
            videoRef.current.play();
            setIsPlaying(true);
            console.log('pause the video');
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
            console.log('pause the video');
;        }
    }
    return(
        <div className="videoPlayer-container">
            <div className="video-container">
                <video 
                    ref={videoRef}
                    className="video" 
                    muted 
                    autoPlay 
                    loop>
                    <source src={currentVideo.video} type="video/mp4" />
                </video>
            </div>

            <div className="controls-container">
                <input type="range" className="video-length" />
                <div className="player-buttons">
                    <FontAwesomeIcon className="play-previous" size="2x" icon={faAngleLeft} />
                    <FontAwesomeIcon onClick={playVideoHandler} className="play" size="2x" icon={faPlay} />
                    <FontAwesomeIcon className="play-next" size="2x" icon={faAngleRight} />
                </div>
            </div>


        </div>
    );
}

export default VideoPlayer;