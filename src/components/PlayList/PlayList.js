import React from 'react';
import SongList from './SongList';

import MusicPlayer from './MusicPlayer';


class PlayList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      songList: null, 
      activeSong: null
    };
    this.onSongSelect = this.onSongSelect.bind(this);
  }

  onSongSelect = (song) => {
    this.setState({ activeSong: song });
  };

  render() {
    const { activeSong } = this.state;
    console.log('props from playSongs, ', this.props);
    return(
      <div>
        <MusicPlayer 
          activeSong={activeSong}
          onSongSelect={this.onSongSelect} 
          songs={this.props.songs} 
        />
        <SongList 
          onSongSelect={this.onSongSelect} 
          songs={this.props.songs} 
        />
      </div>
    );
  }
}

export default PlayList;