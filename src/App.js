import React, {useState} from 'react';
import './styles/app.scss'
//Importing videos
import videosDB from './utility_db';
//Importing components
import Player from '../src/components/Player';
import Videos from '../src/components/Videos';
//import img

function App() {

  const [videos, setVideos] = useState(videosDB);
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <div className="App">
        <h1>Video Project</h1>
        <Videos currentVideo={currentVideo} setCurrentVideo={setCurrentVideo}/>
        <Player />
    </div>
  );
}

export default App;
