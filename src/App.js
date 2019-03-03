import React from 'react';
// import Header from './components/Header';
import PlaySongs from './components/PlayList/PlayList';
import { Jumbotron, Button, Container } from 'react-bootstrap';


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
  songs = [this.song1, this.song2, this.song3];

  render() {
    return (
      <Container className="ui container">
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
         </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </Container>
    )
  }
}

export default App;