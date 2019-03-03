import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ChooseSongs from './components/ChooseSongs/ChooseSongs'
import PlayList from './components/PlayList/PlayList'
import Car from './components/Car/Car'
import App from './App'


import './devstyles.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

const NotFound = () => (<h1>Page was not found</h1>);

const AppliedRoute = ({ path, Component, routeData, funcs }) => (
	<Route path={path} render={(routeProps) => <Component {...routeProps} {...routeData} {...funcs} />} />
);



class Routes extends React.Component {
	constructor() {
		super();

		this.state = {
			showCar: false,
            chooseData: [],
            playData: {
                songs: [{
                    id: "songN1",
                    songName: "One Kiss",
                    artist: "Dua Lipa",
                    album: "someAlbun1",
                    length: 4351,
                    filePath: '/assets/songs/Duke Dumont - Ocean Drive.mp3'
                  },
                   {
                    id: "songN2",
                    songName: "someSong2",
                    artist: "someArtist2",
                    album: "someAlbun2",
                    length: 4352,
                    filePath: '/assets/songs/Pharrell Williams - Happy.mp3'
                  },
                   {
                    id: "songN3",
                    songName: "someSong3",
                    artist: "someArtist3",
                    album: "someAlbun3",
                    length: 4353,
                    filePath: '/assets/songs/Queen - We Are the Champions.mp3'
                  }]}
        }

		this.addChooseData = this.addChooseData.bind(this);
		this.addPlayData = this.addPlayData.bind(this);
		this.startAnimation = this.startAnimation.bind(this);
		this.startAnimationReverse = this.startAnimationReverse.bind(this);
	}

	addChooseData = (data) => {

		this.setState({ chooseData: [...this.state.chooseData, data] }, () => console.log('added new data to choose ', this.state.chooseData));
	}

	addPlayData(data) {
		this.setState({ playData: data }, () => console.log('added new data to playData ', this.state.playData));
	}


	startAnimation() {
		const car = document.querySelector('.car')
		console.log(car);
		car.className = "car run";
	}

	startAnimationReverse() {
		const car = document.querySelector('.car')
		car.className = "car run-reverse";
	}

	render() {
		const car = this.state.showCar ? <Car funcs={{ start: this.startAnimation, reverse: this.startAnimationReverse }} /> : null;

		return (
			<Router>
				<React.Fragment>
					<Header />
					{car}
					<Switch>
						<Route exact path="/" component={App} />
						<AppliedRoute path="/home" Component={Home} routeData={this.state.chooseData} funcs={{ add: this.addChooseData }} />
						<AppliedRoute path="/choose" Component={ChooseSongs} routeData={this.state.chooseData} funcs={{ add: this.addChooseData }} />
						<AppliedRoute path="/play" Component={PlayList} routeData={this.state.playData} funcs={{ add: this.addPlayData }} />
						<Route component={NotFound} />
					</Switch>
				</React.Fragment>
			</Router>
		);
	}
}


export default Routes;