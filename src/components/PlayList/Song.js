import React from 'react';

const Song = ({ id, songName, artist, album, length, filePath }) => {
  return(
    <div className="ui segment">
      <div>{songName}</div>
      <div>{artist}</div>
      <div>{album}</div>
      <div>{length}</div>
      <div>{filePath}</div>
    </div>
  );
}

export default Song;