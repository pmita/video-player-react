import React from 'react';

function Videos({currentVideo, setCurrentVideo}){
    return(
        <div className="videos-container">
            <video className="video" muted autoPlay loop>
                <source src={currentVideo.src} type="video/mp4" />
            </video>

        </div>
    );
}

export default Videos;