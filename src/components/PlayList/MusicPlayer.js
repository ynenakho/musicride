import './MusicPlayer.css';
import React from 'react';
import Sound from 'react-sound';
import SelectaedSongControls from './SelectedSongControls';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      controlled: true,
      currentSong: "",
      position: 0,
      volume: 100,
      playbackRate: 1,
      loop: false,
      playStatus: Sound.status.PLAYING
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeSong !== this.props.activeSong) {
      this.setState({
        playStatus: Sound.status.PLAYING
      });
    }
  }

  render() {
    const { volume, playbackRate, loop } = this.state;
    return(
      <div >
           {this.props.activeSong ?
            <Sound
              url={this.props.activeSong.filePath}
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
            /> : null}
            <div>
              <SelectaedSongControls
                
                songs={this.props.songs}
                onSongSelect={this.props.onSongSelect}
                song={this.props.activeSong}
                playStatus={this.state.playStatus}
                onPlay={() => this.setState({ playStatus: Sound.status.PLAYING })}
                onPause={() => this.setState({ playStatus: Sound.status.PAUSED })}
                onVolumeUp={() => this.setState({ volume: volume >= 100 ? volume : volume + 10 })}
                onVolumeDown={() => this.setState({ volume: volume <= 0 ? volume : volume - 10 })}
                volume={volume}
              />
            </div>
      </div>
    );
  }
}

export default MusicPlayer;