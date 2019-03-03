import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import ChooseSongs from './components/ChooseSongs/ChooseSongs'
import PlayList from './components/PlayList/PlayList'
import Header from './components/Header'
import App from './App'


import './devstyles.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

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
            playData: {
                songs: [{
                    id: "songN1",
                    songName: "someSong",
                    artist: "someArtist",
                    album: "someAlbun",
                    length: 435,
                    filePath: '../songs/dfasdf'
                  },
                   {
                    id: "songN2",
                    songName: "someSong",
                    artist: "someArtist",
                    album: "someAlbun",
                    length: 435,
                    filePath: '../songs/dfasdf'
                  },
                   {
                    id: "songN3",
                    songName: "someSong",
                    artist: "someArtist",
                    album: "someAlbun",
                    length: 435,
                    filePath: '../songs/dfasdf'
                  }]}
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
                    <AppliedRoute path="/login" Component={Login} routeData={this.state.chooseData} funcs={{add: this.addChooseData}} />
                    <AppliedRoute path="/home" Component={Home} routeData={this.state.chooseData} funcs={{add: this.addChooseData}} />
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