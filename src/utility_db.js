import React from 'react';
import { v4 as uuid } from 'uuidv4';

function Videos_db(){
    return(
        [
            {
                title: 'Tea Making',
                artist: 'Eva Elijas',
                src: './videos/test.jpg',
                id: uuid(),
                active: true
            },
            {
                title: 'Over a cliff',
                artist: 'Gantas',
                src: '../videos/cliff.mp4',
                id: uuid(),
                active: false
            },
            {
                title: 'Drone goes voom voom',
                artist: 'Stefano Ridalno',
                src: '../videos/drone.mp4',
                id: uuid(),
                active: false
            }
        ]
    );
}

export default Videos_db;