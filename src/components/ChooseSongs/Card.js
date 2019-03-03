import React from 'react';
import './Card.css';

export default class Card extends React.Component {
  render() {
    let className = ['Card'];
    if (this.props.status === 'allsongs') {
      className.push('Card-grey');
    } else if (this.props.status === 'playlist') {
      className.push('Card-blue');
    }
    return (
      <div className={className.join(' ')} name={this.props.client.id} data-status={this.props.status}>
        <div className="Card-title">
          <div>{this.props.client.artist} - {this.props.client.songName}</div> 
          <div>{this.props.client.length/100}</div>  
        </div>
      </div>
    );
  }
}