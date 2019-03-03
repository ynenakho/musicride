import './SelectedSongControls.css';
import React from 'react';

class SelectaedSongControls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songName: "", 
      artist: "", 
      length: "", 
      filePath: ""
    }
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.song !== this.props.song) {
      const {songName, artist, length, filePath } = this.props.song;
      this.setState({
        songName, 
        artist, 
        length, 
        filePath
      });
    }
  }

  changeSong() {
    const {songs, song, onSongSelect} = this.props;
    for (let i = 0; i < songs.length; i++) {
      if (song.id === songs[i].id) {
        if (i === (songs.length - 1)) {
          onSongSelect(songs[0]);
        }
        else
          onSongSelect(songs[i + 1]);
      }
    }  
  }

  changeSongBack() {
    const {songs, song, onSongSelect} = this.props;
    for (let i = 0; i < songs.length; i++) {
      if (song.id === songs[i].id) {
        if (i === 0) {
          onSongSelect(songs[songs.length - 1]);
        }
        else
          onSongSelect(songs[i - 1]);
      }
    }  
  }

  render() {
    const {songName, artist, length, filePath} = this.state;
    const {onPlay, onPause, onVolumeUp, onVolumeDown, volume } = this.props;
    const disabled = this.props.song ? false : true;
    return (
      <div className="selected-song-controls " fixed="bottom">
        <div className="flex-component">
          <div>
            <p className="head">Song name: {songName}</p>
            <div>Artist: {artist}</div>
            <div>Volume: {volume} %</div>
          </div>
          <div className="buttons">
            <i className="arrow left icon big" disabled={disabled} onClick={()=>this.changeSongBack()}></i>
            <i className="play icon big" disabled={disabled} onClick={onPlay}></i>
            <i className="pause icon big" disabled={disabled} onClick={onPause}></i>
            <i className="arrow right icon big" disabled={disabled} onClick={()=>this.changeSong()}></i>
            <i className="minus icon big" disabled={disabled} onClick={onVolumeDown}></i>
            <i className="plus icon big" disabled={disabled} onClick={onVolumeUp}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectaedSongControls;