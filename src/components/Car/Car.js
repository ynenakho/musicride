import React from 'react';

import "./Car.css";

class Header extends React.Component {

  componentDidMount() {
    this.props.funcs.start();
  }

  render() {
    const { start, reverse } = this.props.funcs;
    return (
      <div className="ui container header">
        <div className="car">
          <img src="/car.png" alt="car" />
        </div>
        <div className="road" />
        <div className="pickup" />
        <button className="dev-start" onClick={() => start()}>Start</button>
        <button className="dev-prev" onClick={() => reverse()}>reverse</button>
      </div>
    );
  }
}

export default Header;