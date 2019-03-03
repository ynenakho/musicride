import React from 'react';
import Song from './Song';

const SongList = ({songs}) => {
  console.log(songs);
  
  const songsToRender = songs.map(({id, songName, artist, album, length, filePath}) => 
    <Song 
      name={songName}
      id={id}
      key={id}
      artist={artist}
      album={album}
      length={length}
      path={filePath}
    />
  );
  return (
    <div>
      {songsToRender}
    </div>
  );
}

export default SongList;