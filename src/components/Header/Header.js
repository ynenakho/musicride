import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

const header = withRouter((props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand onClick={() => {props.history.push('/')}}>React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => {props.history.push('/choose')}}>Songs</Nav.Link>
                    <Nav.Link onClick={() => {props.history.push('/play')}}>Play</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
});

export default header;