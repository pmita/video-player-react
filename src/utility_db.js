import React from 'react';

function Videos_db(){
    return(
        [
            {
                title: 'A tree in a summer day',
                artist: 'Roman Ontostvon',
                src: 'https://player.vimeo.com/external/511964854.sd.mp4?s=5c0dc0c349830eb6249135d971db3730e9d9f18b&profile_id=165&oauth2_token_id=57447761',
                active: true
            },
            {
                title: 'Over a cliff',
                artist: 'Gantas',
                src: 'https://player.vimeo.com/external/293348753.sd.mp4?s=0a39968e75c042ece03a7f18a9c2f48a2b999173&profile_id=164&oauth2_token_id=57447761',
                active: false
            },
            {
                title: 'Drone goes voom voom',
                artist: 'Stefano Ridalno',
                src: 'https://player.vimeo.com/external/191377177.sd.mp4?s=d7f0f81dc5334753d42377bd78fbf474d808ae5f&profile_id=164&oauth2_token_id=57447761',
                active: false
            }
        ]
    );
}

export default Videos_db;