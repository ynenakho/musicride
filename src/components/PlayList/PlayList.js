import React from 'react';
import SongList from './SongList';

class PlayList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { songList: null, activeSong: null};
  }
  render() {
    return(
      <div>
        <SongList songs={this.props.songs} />
      </div>
    );
  }
}

export default PlayList;