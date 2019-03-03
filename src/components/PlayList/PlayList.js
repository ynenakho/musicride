import React from 'react';
import SongList from './SongList';
import SelectaedSong from './SelectedSong';

class PlayList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { songList: null, activeSong: null};
  }

  onSongSelect = (song) => {
    this.setState({ activeSong: song });
  };

  render() {
    console.log('props from playSongs, ', this.props);
    return(
      <div>
        <div>
          <SelectaedSong song={this.state.activeSong}/>
        </div>
        <SongList 
          onSongSelect={this.onSongSelect} 
          songs={this.props.songs} 
        />
      </div>
    );
  }
}

export default PlayList;