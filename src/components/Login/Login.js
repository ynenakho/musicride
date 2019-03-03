import React, { Component } from 'react';
import { Button, Form } from "react-bootstrap";
import validator from 'validator';

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: null,
    validated: false,
  };


  onSubmitHandler = (event) => {
    const form = event.currentTarget;
    this.setState({ validated: true });
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return ;
    }
    this.props.history.push('/home');
    event.preventDefault();
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { email, password, validated } = this.state;
    const isInvalid = (password === '' || email === '');

    return (
      <div className="Login">
        <Form
          noValidate
          validated={validated}
          onSubmit={this.onSubmitHandler}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              autoFocus type="email"
              placeholder="Enter email"
              type="email"
              name="email"
              value={email}
              onChange={this.onChangeHandler}
              isValid={email.length > 6}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name="password"
              value={password}
              onChange={this.onChangeHandler}
              type="password"
              placeholder="Password"
              isValid={password.length > 6} />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
          disabled={isInvalid}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  };
}

export default Login;