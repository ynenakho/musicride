import './Song.css';
import React from 'react';

const Song = ( song) => {
  const { onSongSelect, songName, artist, length } = song;
  return(
    
    <div className=" song" >
      <div>
        <h4>Song name: {songName}</h4>
        <div>Artist: {artist}</div>
        <div>Duration: {length}</div>
      </div>
      <div>
        <i className="huge play icon play-button" onClick={() => onSongSelect(song)}></i>
      </div>
    </div>
  );
}

export default Song;