import './SelectedSongControls.css';
import React from 'react';



class SelectaedSongControls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songName: "", 
      artist: "", 
      album: "", 
      length: "", 
      filePath: ""
    }
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.song !== this.props.song) {
      const {songName, artist, album, length, filePath } = this.props.song;
      this.setState({
        songName, 
        artist, 
        album, 
        length, 
        filePath
      });
    }
  }
  
 

  changeSong() {
    const {songs, song, onSongSelect} = this.props;
    for (let i = 0; i < songs.length; i++) {
      if (song.id == songs[i].id) {
        if (i == (songs.length - 1)) {
          onSongSelect(songs[0]);
        }
        else
          onSongSelect(songs[i + 1]);
      }
    }  
  }
  

  render() {
    
    const {songName, artist, album, length, filePath} = this.state;
    const {onPlay, onPause, onVolumeUp, onVolumeDown, volume } = this.props;
    const disabled = this.props.song ? false : true;
    return (
      <div className="selected-song-controls ui segment">
    
        <div>
          <h3>Song name: {songName}</h3>
          <div>Artist: {artist}</div>
          <div>Album: {album}</div>
          <div>Volume: {volume} %</div>
        </div>
        
        <div className="ui icon buttons purple" >
          <button className="ui button" disabled={disabled} onClick={onPlay}>
            <i className="play icon"></i>
          </button>
          <button className="ui button" disabled={disabled} onClick={onPause}>
            <i className="pause icon"></i>
          </button>
          <button className="ui button" disabled={disabled} onClick={()=>this.changeSong()}>
            <i className="arrow right icon"></i>
          </button>
          <button className="ui button" disabled={disabled} onClick={onVolumeDown}>
            <i className="minus icon"></i>
          </button>
          <button className="ui button" disabled={disabled} onClick={onVolumeUp}>
            <i className="plus icon"></i>
          </button>
          
        </div>
        
      </div>
    );
  }
}

export default SelectaedSongControls;