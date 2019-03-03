import React from 'react';
import Countdown from "../ChooseSongs/Countdown";
import "./Car.css";
import { Card, Overlay, Popover } from "react-bootstrap";

class Header extends React.Component {
  constructor(){
    super();

    this.state = {show:true}
    this.handleClick = ({ target }) => {
      console.log("hren")
      this.setState(s => ({ target, show: s.show }));
    };

  }
  componentDidMount() {
    this.props.funcs.start();
    setTimeout(() => {
      this.setState({show: false});
		}, 10000);
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
        <Overlay
          show={this.state.show}
          target={this.state.target}
          placement="bottom"
          container={this}
        >
            <Popover id="popover-contained"><Countdown/></Popover>
          </Overlay>
        <img onLoad={this.handleClick} src="hui.png" alt="pickup"/>
        </div>
      </div>
    );
  }
}

export default Header;
