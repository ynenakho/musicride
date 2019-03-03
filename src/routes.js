import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import ChooseSongs from './components/ChooseSongs/ChooseSongs'
import PlayList from './components/PlayList/PlayList'
import Header from './components/Header'
import App from './App'


import './devstyles.css';

const NotFound = () => (<h1>Page was not found</h1>);

const DevelopLinks = () => (
    <div className="dev-links">
        <ul className="dev-ul">
            <li className="dev-li"><Link to="/">Main</Link></li>
            <li className="dev-li"><Link to="/choose">Choose</Link> </li>
            <li className="dev-li"><Link to="/play">Playlist</Link> </li>
        </ul>
    </div>
)

const AppliedRoute = ({path, Component, routeData, funcs}) => (
    <Route path={path} render={(routeProps) => <Component {...routeProps} {...routeData} {...funcs}/>} />
);



class Routes extends React.Component {

    constructor() {
        super();

        this.state = {
            chooseData: {},
            playData: {}
        }
        this.addChooseData = this.addChooseData.bind(this);
        this.addPlayData = this.addPlayData.bind(this);
    }

    addChooseData(data) {
        this.setState({chooseData: data}, () => console.log('added new data to choose ', this.state.chooseData));
    }

    addPlayData(data) {
        this.setState({playData: data}, () => console.log('added new data to playData ', this.state.playData));
    }


    render() {
        return(
        <Router>
            <React.Fragment>
                <DevelopLinks />
                <Header />
                <Switch>
                    <Route exact path="/" component={App}/>
                    <AppliedRoute path="/choose" Component={ChooseSongs} routeData={this.state.chooseData} funcs={{add: this.addChooseData}} />
                    <AppliedRoute path="/play" Component={PlayList} routeData={this.state.playData} funcs={{add: this.addPlayData}} />
                    <Route component={NotFound} />
                </Switch>
            </React.Fragment>
        </Router>
        );
    }
}


export default Routes;