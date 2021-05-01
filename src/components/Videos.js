import React from 'react';

function Videos({currentVideo, setCurrentVideo}){
    return(
        <div className="videos-container">
            

            <img src={currentVideo.src} alt="" />
        </div>
    );
}

export default Videos;