import React from 'react';
import Song from './Song';

const SelectaedSong = ({ song }) => {
  if (!song) {
    return <div>Song not selected</div>;
  }

  // const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const {id, songName, artist, album, length, filePath} = song;
  return (
    <div>
      <Song 
        songName={songName}
        id={id}
        key={id}
        artist={artist}
        album={album}
        length={length}
        filePath={filePath} 
      />
      {/* <div className="ui embed">
        <iframe src={videoSrc} title="video.snippet.title" />
      </div>
      <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
      </div> */}
    </div>
  );
}

export default SelectaedSong;