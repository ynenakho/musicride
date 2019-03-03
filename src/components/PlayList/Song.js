import './Song.css';
import React from 'react';

const Song = ( song) => {
  const { onSongSelect, songName, artist, length } = song;
  console.log(typeof length);
  
  return(
    
    <div className=" song" >
      <div>
        <h4>{songName}</h4>
        <div>{artist}</div>
        <div>{length/100}</div>
      </div>
      <div>
        <i className="huge play icon play-button" onClick={() => onSongSelect(song)}></i>
      </div>
    </div>
  );
}

export default Song;