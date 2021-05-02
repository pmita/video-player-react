import React, {useState} from 'react';
import './styles/app.scss'
//Importing videos
import videosDB from './utility_db';
//Importing components
//import Player from '../src/components/Player';
//import Videos from '../src/components/Videos';
import VideoPlayer from '../src/components/VideoPlayer';
//import img

function App() {
  /*-------Managing State-----------------*/
  const [videos, setVideos] = useState(videosDB);
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [videoInfo, setVideoInfo] = useState({currentTimestamp: 0, duration: 0});
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
       
        <VideoPlayer 
          currentVideo={currentVideo} 
          setCurrentVideo={setCurrentVideo} 
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          videoInfo={videoInfo}
          setVideoInfo={setVideoInfo}/>
    </div>
  );
}

export default App;
