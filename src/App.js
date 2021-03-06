import React from 'react';
import { Form, Col, Container, Row } from 'react-bootstrap';
import './devstyles.css';

class App extends React.Component {
  state = {
    whereFrom: this.props.whereFrom,
    whereTo: this.props.whereTo
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.confirmRide({ whereFrom: event.target.elements.whereFrom.value, whereTo: event.target.elements.whereTo.value });
    this.props.history.push('/choose');
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    let className = "ContainerAppEbalo";
    if (this.props.showCar)
      className = "ContainerAppEbaloOff";
    return (
      <Container className={className}>
        <Row noGutters><h1 className="HeaderTextApp">It matters how you get there</h1></Row>
        <Row noGutters>
          <Form xs={6} onSubmit={this.onSubmitHandler}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <input
                  className="InputApp"
                  type="text"
                  placeholder="Where From"
                  name="whereFrom"
                  value={this.state.whereFrom}
                  onChange={this.onChangeHandler}
                  disabled={this.props.rideSubmitted}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <input
                  placeholder="Where To"
                  className="InputApp"
                  type="text"
                  value={this.state.whereTo}
                  onChange={this.onChangeHandler}
                  name="whereTo"
                  disabled={this.props.rideSubmitted}
                />
              </Form.Group>
            </Form.Row>
            <Row className="justify-content-center">
              <button className="ButtonApp" type="submit">
                Confirm
						</button>
            </Row>
          </Form>
        </Row>
      </Container>
    )
  }
};

export default App;