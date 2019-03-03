import React from 'react';
import songs from "../../songsData";
import Board from "./Board";
import {Container, Row, Col, InputGroup, FormControl, Card} from "react-bootstrap";
import Countdown from "./Countdown";

class ChooseSongs extends React.Component {
  songs = songs;
  style = {
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
    }
  }
  render() {
    return(
        <div>
        <Container>
        <Row className="justify-content-md-center">
          <Col md="2">
          <Card style={this.style.CountdownCard}>
            <Countdown date={Date.now() + 300000}/>
            </Card>
          </Col>
        </Row>
        <br />
              <Col style={{display:"flex", justifyContent:"center"}}>
                <InputGroup >
                  <FormControl
                    style={{padding: "10px", width: "50%"}}
                    placeholder="Song Search"
                    aria-label="Song Search"
                    aria-describedby="song search"
                  />
                </InputGroup>
              </Col>
        <Board />
      </Container>
        </div>
    );
  }
}

export default ChooseSongs;