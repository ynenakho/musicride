import React from 'react';
import Song from './Song';

const SongList = ({songs, onSongSelect}) => {
  console.log(songs);
  
  const songsToRender = songs.map(({id, songName, artist, album, length, filePath}) => 
    <Song
      onSongSelect={onSongSelect}
      songName={songName}
      id={id}
      key={id}
      artist={artist}
      album={album}
      length={length}
      filePath={filePath}
    />
  );
  return (
    <div className="ui relaxed divided list">
      {songsToRender}
    </div>
  );
}

export default SongList;