import React from 'react';
// import Header from './components/Header'
import ChooseSongs from "./components/ChooseSongs/ChooseSongs";
import PlaySongs from './components/PlayList/PlayList';



class App extends React.Component {
  song1 = {
    id: "songN1",
    songName: "someSong",
    artist: "someArtist",
    album: "someAlbun",
    length: 435,
    filePath: '../songs/dfasdf'
  };
  song2 = {
    id: "songN2",
    songName: "someSong",
    artist: "someArtist",
    album: "someAlbun",
    length: 435,
    filePath: '../songs/dfasdf'
  };
  song3 = {
    id: "songN3",
    songName: "someSong",
    artist: "someArtist",
    album: "someAlbun",
    length: 435,
    filePath: '../songs/dfasdf'
  };
  songs = [this.song1,this.song2,this.song3];

  render() {
    return(
      <div className="ui container">
      </div>
    );
  }
}

export default App;