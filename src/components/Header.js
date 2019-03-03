import React from 'react';

import "./header-styles.css";

class Header extends React.Component {

  constructor() {
    super();

    this.car = React.createRef();
  }




  render() {
    // const {start, reverse} = this.props.funcs;
    return(
      <div className="ui container header">
        <div className="car" ref = {this.car}>
          <img src="/car.png" alt="car" />
        </div>
        <div className="road" />
        {/* <button className="dev-start" onClick={() => start(this.car)}>Start</button>
        <button className="dev-prev" onClick={() => reverse(this.car)}>reverse</button> */}
      </div>
    );
  }
}

export default Header;