import React from 'react';
import {ProgressBar} from 'react-bootstrap';

class MyProgressBar extends React.Component {
  timer = 0;
  render() {
  setTimeout(()=>{this.timer++}, this.props.progress);

  return(
    <div>
      <ProgressBar now={this.timer} label={`${this.timer}%`} />
    </div>
  )}
}

export default MyProgressBar;