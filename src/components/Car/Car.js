import React from 'react';

import "./Car.css";

class Header extends React.Component {

  componentDidMount() {
    this.props.funcs.start();
  }

  render() {
    return (
      <div className="ui container header">
        <div className="car">
          <img src="/car.svg" alt="car" />
        </div>
        <div className="road" />
        <div className="progressBarApp" />
        <div className="pickup">
          <img src="hui.png" alt="pickup"/> 
        </div>
      </div>
    );
  }
}

export default Header;