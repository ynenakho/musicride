import React from 'react';
import ReactDOM from 'react-dom'
import Dragula from 'dragula';
import 'dragula/dist/dragula.css';
import Swimlane from './Swimlane';
import './Board.css';
import { Row, Col, Container } from "react-bootstrap";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.containers = []
    const clients = this.getClients();
    this.state = {
      clients: {
        allsongs: clients.filter(client => !client.status || client.status === 'allsongs'),
        playlist: clients.filter(client => client.status && client.status === 'playlist'),
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
      console.log(col);
      if (col === 'allsongs') {
        className.push('Card-grey');
      } else if (col === 'playlist') {
        className.push('Card-blue');
      }
      el.className = ''
      el.className = className.join(' ')
      console.log(el);
    });
  }

  getClients() {
    return [
      ['1','Stark, White and Abbott','Cloned Optimal Architecture', 'allsongs'],
      ['2','Wiza LLC','Exclusive Bandwidth-Monitored Implementation', 'allsongs'],
      ['3','Nolan LLC','Vision-Oriented 4Thgeneration Graphicaluserinterface', 'allsongs'],
      ['4','Thompson PLC','Streamlined Regional Knowledgeuser', 'allsongs'],
      ['5','Walker-Williamson','Team-Oriented 6Thgeneration Matrix', 'allsongs'],
      ['6','Boehm and Sons','Automated Systematic Paradigm', 'allsongs'],
      ['7','Runolfsson, Hegmann and Block','Integrated Transitional Strategy', 'allsongs'],
      ['8','Schumm-Labadie','Operative Heuristic Challenge', 'allsongs'],
      ['9','Kohler Group','Re-Contextualized Multi-Tasking Attitude', 'allsongs'],
      ['10','Romaguera Inc','Managed Foreground Toolset', 'allsongs'],
      ['11','Reilly-King','Future-Proofed Interactive Toolset', 'allsongs'],
      ['12','Emard, Champlin and Runolfsdottir','Devolved Needs-Based Capability', 'allsongs'],
      ['13','Fritsch, Cronin and Wolff','Open-Source 3Rdgeneration Website', 'allsongs'],
      ['14','Borer LLC','Profit-Focused Incremental Orchestration', 'allsongs'],
      ['15','Emmerich-Ankunding','User-Centric Stable Extranet', 'allsongs'],
      ['16','Willms-Abbott','Progressive Bandwidth-Monitored Access', 'allsongs'],
      ['17','Brekke PLC','Intuitive User-Facing Customerloyalty', 'allsongs'],
      ['18','Bins, Toy and Klocko','Integrated Assymetric Software', 'allsongs'],
      ['19','Hodkiewicz-Hayes','Programmable Systematic Securedline', 'allsongs'],
      ['20','Murphy, Lang and Ferry','Organized Explicit Access', 'allsongs'],
    ].map(companyDetails => ({
      id: companyDetails[0],
      name: companyDetails[1],
      description: companyDetails[2],
      status: companyDetails[3],
    }));
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
