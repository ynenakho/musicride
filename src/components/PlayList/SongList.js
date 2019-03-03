import React from 'react';
import Song from './Song';

const SongList = ({songs}) => {
  const songsToRender = songs.map(() => 
    <Song />
  );
  return (
    <div>
      {songsToRender}
    </div>
  );
}

export default SongList;