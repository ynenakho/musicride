import React, { Component } from 'react';
import "./Countdown.css";
class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    }
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    let driver = ""
    const countDown = this.state;
    if (countDown.min == 0 && countDown.sec == 0)
      driver = "Your driver is here";
    else if (countDown.sec > 30 && countDown.min == 0)
      driver = "EPC:" + countDown.sec + " sec";
    else
      driver = "EPC:" + countDown.min + " sec";
    return (
      <div>
        <span className="Countdown-col">
          <div className="Countdown-col-element">
          <div className="Card-title">{driver}</div>
          </div>
        </span>
      </div>
    );
  }
}

export default Countdown;