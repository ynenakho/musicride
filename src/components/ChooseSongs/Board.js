import React from 'react';
import Dragula from 'dragula';
import 'dragula/dist/dragula.css';
import Swimlane from './Swimlane';
import './Board.css';
import { Row, Col } from "react-bootstrap";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.containers = []
    const clients = this.props.clients;
    this.state = {
      clients: {
        allsongs: [...clients],
        playlist: []
      }
    }
    this.swimlanes = {
      allsongs: React.createRef(),
      playlist: React.createRef(),
    }
  }
  componentDidMount () {
    const drake = Dragula(this.containers, {revertOnSpill: true})
    drake.on('drop', (el, target, source, sibling) => {
      let className = ['Card'];
      let col;
      col = target.className;
      col = col.split(' ')[1].toLowerCase();
      if (col === 'allsongs') { 
        className.push('Card-grey');
      } else if (col === 'playlist') {
        className.push('Card-blue');
      }
      el.className = ''
      el.className = className.join(' ')
      let id = el.getAttribute('name');
      this.props.AddToPlaylist(this.props.clients[id - 1]);

    });
  }


  renderSwimlane(name, clients, ref, dragulaDecorator) {
    return (
      <Swimlane name={name} clients={clients} ref={ref} dragulaRef={dragulaDecorator}/>
    );
  }

  render() {
    const dragulaDecorator = (componentBackingInstance) => {
      if (componentBackingInstance) {
        this.containers.push(componentBackingInstance)
      }
    }
    return (
      <div className="Board">
          <Row>
            <Col md="6">
              {this.renderSwimlane('All songs', this.state.clients.allsongs, this.swimlanes.allsongs, dragulaDecorator)}
            </Col>
            <Col md="6">
              {this.renderSwimlane('Playlist',this.state.clients.playlist, this.swimlanes.playlist, dragulaDecorator)}
            </Col>
          </Row>
        </div>
    );
  }
}
