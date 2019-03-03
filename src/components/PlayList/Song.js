import './Song.css';
import React from 'react';

const Song = ( song) => {
  const { onSongSelect, songName, artist, album, length } = song;
  return(
    
    <div className="ui segment song" >
      <div>
        <h3>Song name: {songName}</h3>
        <div>Artist: {artist}</div>
        <div>Album: {album}</div>
        <div>Duration: {length}</div>
      </div>
      <div>
        <i className="huge play icon play-button" onClick={() => onSongSelect(song)}></i>
      </div>
    </div>
  );
}

export default Song;