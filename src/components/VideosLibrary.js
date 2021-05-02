import React from 'react';
//Importing components
import ItemLibrary from './ItemLibrary';

const VideosLibrary = ({videos}) => {
    return(
        <div className="library-container">
            <h1>Library Component</h1>
            {videos.map( (video) => {
                return (<ItemLibrary video={video} />);
            })}
        </div>
    );
}

export default VideosLibrary;