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

const Routes = () => (
        <Router>
            <React.Fragment>
                <DevelopLinks />
                <Header />
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/choose" component={ChooseSongs} />
                    <Route path="/play" component={PlayList} />
                    <Route component={NotFound} />
                </Switch>
            </React.Fragment>
        </Router>
);

export default Routes;