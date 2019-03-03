import './Song.css';
import React from 'react';

const Song = ( song) => {
  const { onSongSelect, songName, artist, length } = song;
  return(
    
    <div className=" song" >
      <div>
        <h4>{songName}</h4>
        <div>{artist}</div>
        <div>{length}</div>
      </div>
      <div>
        <i className="huge play icon play-button" onClick={() => onSongSelect(song)}></i>
      </div>
    </div>
  );
}

export default Song;