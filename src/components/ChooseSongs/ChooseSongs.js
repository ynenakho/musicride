import React  from 'react';
import {Link} from 'react-router-dom';
import Board from "./Board";
import {Button, Container, Row, Col, InputGroup, FormControl, Card} from "react-bootstrap";
import Countdown from "./Countdown";

class ChooseSongs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ChooseSongsToggle: false
    }
    this.RenderSpotify = this.RenderSpotify.bind(this);
  this.style = {
    InputGroup:{
      borderRradius: "10px",
      width: "100%",
      display:"flex",
      justifyContent:"center"
    },
    CountdownCard:{
      textAlign:"center",
      borderRradius: "10px",
      backgroundColor:"#ff00bf"
    },
    SyncButton:{
      display:"flex",
      justifyContent:"center"
    }
  }
}
RenderSpotify = () => {
  this.setState({ChooseSongsToggle:true});
}
getClients (){
  return [
    {id:'1', length:206, songName:'Ocean Drive',artist:'Duke Dumont', filepath:'/assets/songs/Duke Dumont - Ocean Drive.mp3', status:'allsongs',},
    {id:'2', length:233, songName:'Happy',artist:'Pharrell Williams', filepath:'/assets/songs/Pharrell Williams - Happy.mp3', status:'allsongs',},
    {id:'3', length:214, songName:'Dont stop me now I',artist:'Queen', filepath:'/assets/songs/Queen - Dont stop me now I.mp3', status:'allsongs',},
    {id:'4', length:209, songName:'We are the Champions',artist:'Queen', filepath:'/assets/songs/Queen - We are the Champions.mp3', status:'allsongs',},
    {id:'5', length:274, songName:'Umbrella',artist:'Rihanna feat. JAY-Z', filepath:'/assets/songs/Rihanna feat. JAY-Z - Umbrella.mp3', status:'allsongs',},
    {id:'6', length:233, songName:'Seven Nation Army',artist:'The White Stripes', filepath:'/assets/songs/The White Stripes - Seven Nation Army.mp3', status:'allsongs',},
    {id:'7', length:150, songName:'Go Solo',artist:'Tom Rosenthal', filepath:'/assets/songs/Tom Rosenthal - Go Solo.mp3',status: 'allsongs',},
  ]
  // .map(companyDetails => ({
    //   id: companyDetails.id,
    //   songName: companyDetails.songName,
    //   artist: companyDetails,
    //   status: companyDetails[3],
    // }));
  }

  ConnectSpotify = () => {
    const WrappedLink = () => {
      return (
        <Button>
          <Link exact={true} to="/play" />
        </Button>
      )
    }
    const clients = this.getClients();
      return <div>
        <Col>
                <InputGroup >
                  <FormControl
                    style={{padding: "10px", width: "50%"}}
                    placeholder="Song Search"
                    aria-label="Song Search"
                    aria-describedby="song search"
                  />
                </InputGroup>
              </Col>
        <Board AddToPlaylist={this.props.add} clients={clients}/>
        <WrappedLink>Submit</WrappedLink>
      </div>
  }
  
  render() {
    const {ChooseSongsToggle} = this.state;
    const clients = this.getClients();
    return(
        <Container>
        <Row className="justify-content-md-center">
          <Col md="2">
          <Card style={this.style.CountdownCard}>
            <Countdown date={Date.now() + 300000}/>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            {ChooseSongsToggle ? this.ConnectSpotify() : <Col style={this.style.SyncButton}><Button onClick={this.RenderSpotify} >Sync Spotify</Button></Col>}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ChooseSongs;