import React from 'react';
import Board from "./Board";
import {Button, Container, Row, Col, InputGroup, FormControl, Card} from "react-bootstrap";
import Countdown from "./Countdown";

class ChooseSongs extends React.Component {
  constructor(){
    super();
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
      ['1','Stark, White and Abbott','Cloned Optimal Architecture', 'allsongs'],
      ['2','Wiza LLC','Exclusive Bandwidth-Monitored Implementation', 'allsongs'],
      ['3','Nolan LLC','Vision-Oriented 4Thgeneration Graphicaluserinterface', 'allsongs'],
      ['4','Thompson PLC','Streamlined Regional Knowledgeuser', 'allsongs'],
      ['5','Walker-Williamson','Team-Oriented 6Thgeneration Matrix', 'allsongs'],
      ['6','Boehm and Sons','Automated Systematic Paradigm', 'allsongs'],
      ['7','Runolfsson, Hegmann and Block','Integrated Transitional Strategy', 'allsongs'],
      ['8','Schumm-Labadie','Operative Heuristic Challenge', 'allsongs'],
      ['9','Kohler Group','Re-Contextualized Multi-Tasking Attitude', 'allsongs'],
      ['10','Romaguera Inc','Managed Foreground Toolset', 'allsongs'],
      ['11','Reilly-King','Future-Proofed Interactive Toolset', 'allsongs'],
      ['12','Emard, Champlin and Runolfsdottir','Devolved Needs-Based Capability', 'allsongs'],
      ['13','Fritsch, Cronin and Wolff','Open-Source 3Rdgeneration Website', 'allsongs'],
      ['14','Borer LLC','Profit-Focused Incremental Orchestration', 'allsongs'],
      ['15','Emmerich-Ankunding','User-Centric Stable Extranet', 'allsongs'],
      ['16','Willms-Abbott','Progressive Bandwidth-Monitored Access', 'allsongs'],
      ['17','Brekke PLC','Intuitive User-Facing Customerloyalty', 'allsongs'],
      ['18','Bins, Toy and Klocko','Integrated Assymetric Software', 'allsongs'],
      ['19','Hodkiewicz-Hayes','Programmable Systematic Securedline', 'allsongs'],
      ['20','Murphy, Lang and Ferry','Organized Explicit Access', 'allsongs'],
    ].map(companyDetails => ({
      id: companyDetails[0],
      name: companyDetails[1],
      description: companyDetails[2],
      status: companyDetails[3],
    }));
  }
  ConnectSpotify = () => {
    console.log(this.state)
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
        <Board clients={clients}/>
      </div>
  }
  
  render() {
    const {ChooseSongsToggle} = this.state;
    console.log("render");
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