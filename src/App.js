import React from 'react';
import Header from './components/Header';
import PlaySongs from './components/PlayList/PlayList';



class App extends React.Component {
  song = {
    id: "songN1",
    songName: "someSong",
    artist: "someArtist",
    album: "someAlbun",
    length: 435
  };
  song2 = {
    id: "songN2",
    songName: "someSong",
    artist: "someArtist",
    album: "someAlbun",
    length: 435
  };
  song3 = {
    id: "songN3",
    songName: "someSong",
    artist: "someArtist",
    album: "someAlbun",
    length: 435
  };
  songs = [this.song1,this.song2,this.song3];

  render() {
    return(
      <div className="ui container">
        <PlaySongs songs={this.songs}/>
      </div>
    );
  }
}

export default App;