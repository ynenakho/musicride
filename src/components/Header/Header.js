import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import "./header-styles.css";


const header = withRouter((props) => {
    const historyPushHandler = (route) => {
        if (!props.showCar)
            return ;
        return (props.history.push(route));
    }

    return (
        <div className="header-color">
        <div className="header-wrapper">
        <Navbar expand="lg" className="header-container">
                <Navbar.Brand onClick={() => { props.history.push('/') }} className="header-logo">Music Ride</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="doRightApp">
                        <Nav.Link className="header-link" onClick={() => { historyPushHandler('/choose') }}>Songs</Nav.Link>
                        <Nav.Link className="header-link" onClick={() => { historyPushHandler('/play') }}>Play</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        </div>
        </div>
    );
});

export default header;