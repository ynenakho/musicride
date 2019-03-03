import React from 'react';
import Song from './Song';
import Sound from 'react-sound';

class SelectaedSong extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      controlled: true,
      currentSong: this.props.song,
      position: 0,
      volume: 100,
      playbackRate: 1,
      loop: false,
      playStatus: Sound.status.PLAYING
    };
  }
  render() {
  if (!this.props.song) {
    return <div>Song not selected</div>;
  }

  // const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const {id, songName, artist, album, length, filePath} = this.props.song;
  const { volume, playbackRate, loop } = this.state;
  return (
    <div>
      {/* <Sound
        url={"../../.." + filePath}
        playStatus={Sound.status.PLAYING}
        playFromPosition={0 }
      />  */}
      <Sound
              url='https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/1hz-10khz-sweep.mp3'
              playStatus={this.state.playStatus}
              position={this.state.position}
              volume={volume}
              playbackRate={playbackRate}
              loop={loop}
              onLoading={({ bytesLoaded, bytesTotal }) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
              onLoad={() => console.log('Loaded')}
              onPlaying={({ position }) => this.setState({ position })}
              onPause={() => console.log('Paused')}
              onResume={() => console.log('Resumed')}
              onStop={() => console.log('Stopped')}
              onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
            />
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
}

export default SelectaedSong;