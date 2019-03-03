import React from 'react';
import songs from "../../songsData";
import Countdown from 'react-countdown-now';
import { Container, Row, Col } from "react-bootstrap";
class ChooseSongs extends React.Component {
  songs = songs;
  render() {
    return(
      <Container>
        <Row>
          <Col><Countdown date={Date.now() + 400000} /></Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
//       <div class="ui grid">
//         <div class= "centered four wide row">
//           <div className="ui card">
//             <Countdown date={Date.now() + 400000} />
//           </div>
//         </div>
//         <div class= "centered four wide row">
//         <div class="ui search">
//   <div class="ui icon input">
//     <input class="prompt" type="text" placeholder="Search song" />
//     <i class="search icon"></i>
//   </div>
//   <div class="results"></div>
// </div>
// </div>
//       </div>
    );
  }
}

export default ChooseSongs;