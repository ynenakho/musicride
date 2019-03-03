import React from 'react';

const Song = ( song) => {
  const { onSongSelect, id, songName, artist, album, length, filePath} = song;
  return(
    
    <div className="ui segment" onClick={() => onSongSelect(song)}>
      <div>Song name: {songName}</div>
      <div>Artist: {artist}</div>
      <div>Album: {album}</div>
      <div>Duration: {length}</div>
      <div>{filePath}</div>
    </div>
  );
}

export default Song;