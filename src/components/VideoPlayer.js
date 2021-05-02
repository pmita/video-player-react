import React, {useRef} from 'react';
//Importing Fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faPause, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'

function VideoPlayer({currentVideo, setCurrentVideo, isPlaying, setIsPlaying, videoInfo, setVideoInfo}) {
    /*-------References-----------------*/
    const videoRef = useRef(null);
    /*-------Event Handelers------------*/
    const playVideoHandler = () => {
        if(!isPlaying){
            videoRef.current.play();
            setIsPlaying(true);
            console.log('video playing');
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
            console.log('pause the video');
       }
    }
    const updateVideoTimeHandler = (e) => {
        const currentTimestamp = e.target.currentTime;
        const duration = e.target.duration;
        setVideoInfo({...videoInfo, currentTimestamp, duration});
    }
    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        );
    }
    const updateVideoControlsHandler = (e) => {
        videoRef.current.currentTime = e.target.value;
        setVideoInfo({...videoInfo, currentTimestamp: e.target.value});
    }
    return(
        <div className="videoPlayer-container">
            <div className="video-container">
                <video 
                    onLoadedMetadata={updateVideoTimeHandler}
                    onTimeUpdate={updateVideoTimeHandler}
                    ref={videoRef}
                    className="video" 
                    muted 
                    loop>
                    <source src={currentVideo.video} type="video/mp4" />
                </video>
            </div>

            <div className="controls-container">
                <div className="controls-buttons">
                    <p>{getTime(videoInfo.currentTimestamp)}</p>
                    <input 
                        onChange={updateVideoControlsHandler}
                        type="range" 
                        className="video-length" 
                        min={0}
                        max={videoInfo.duration}
                        value={videoInfo.currentTimestamp}/>
                    <p>{getTime(videoInfo.duration)}</p>
                </div>
                
                <div className="player-buttons">
                    <FontAwesomeIcon className="play-previous" size="2x" icon={faAngleLeft} />
                    <FontAwesomeIcon onClick={playVideoHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
                    <FontAwesomeIcon className="play-next" size="2x" icon={faAngleRight} />
                </div>
            </div>


        </div>
    );
}

export default VideoPlayer;