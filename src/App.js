import React from 'react';
// import Header from './components/Header';
import PlaySongs from './components/PlayList/PlayList';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';


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
    return (
      <Container>
        <Row noGutters>
          <Form xs={6} onSubmit={this.onSubmitHandler}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Where from:</Form.Label>
                <Form.Control
                  type="text"
                  name="whereFrom"
                  value={this.state.whereFrom}
                  onChange={this.onChangeHandler}
                  disabled={this.props.rideSubmitted}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Where to:</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.whereTo}
                  onChange={this.onChangeHandler}
                  name="whereTo"
                  disabled={this.props.rideSubmitted}
                />
              </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">
              Confirm
						</Button>
          </Form>

        </Row>
      </Container>
    )}
};

export default App;