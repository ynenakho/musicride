import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ChooseSongs from './components/ChooseSongs/ChooseSongs'
import PlayList from './components/PlayList/PlayList'
import Car from './components/Car/Car'
import App from './App'


import './devstyles.css';
import Header from './components/Header/Header';

const NotFound = () => (<h1>Page was not found</h1>);

const AppliedRoute = ({ path, Component, routeData, funcs }) => (
	<Route path={path} render={(routeProps) => <Component {...routeProps} {...routeData} {...funcs} />} />
);



class Routes extends React.Component {
	constructor() {
		super();

		this.state = {
			rideDuration: 20000,
			showCar: false,
			rideSubmitted: false,
			whereFrom: "",
			whereTo: "",
			chooseData: {songs: []},
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
				}]
			}
		}

		this.addChooseData = this.addChooseData.bind(this);
		this.addPlayData = this.addPlayData.bind(this);
		this.startAnimation = this.startAnimation.bind(this);
	}

	addChooseData = (data) => {
		for (let i = 0; i < this.state.chooseData.songs.length; i++) {
			if (this.state.chooseData.songs[i].id == data.id)
				return ;
		}
		this.setState({ chooseData: {songs: [...this.state.chooseData.songs, data]} }, () => console.log('added new data to choose ', this.state.chooseData));
	}

	addPlayData(data) {
		this.setState({ playData: data }, () => console.log('added new data to playData ', this.state.playData));
	}

	startAnimation() {
		const car = document.querySelector('.car')
		console.log(car);
		car.style.animation = "runCar 5s linear forwards, runCarFinish 20s linear 10s forwards";
		setTimeout(() => {
			const pickup = document.querySelector('.pickup');
			pickup.style.display = "none";
		}, 10000);
	}

	confirmRideHandler = (data) => {
		const { whereTo, whereFrom } = data;
		this.setState({ whereTo: whereTo, whereFrom: whereFrom, rideSubmitted: true, showCar: true }, () => console.log('this state = ', this.state));
	}

	render() {
		const car = this.state.showCar ? <Car countdown={this.state.rideDuration} funcs={{ start: this.startAnimation }} /> : null;
		const { whereFrom, whereTo, rideSubmitted, chooseData, rideDuration } = this.state;
		console.log("HERE", this.state.chooseData)
		return (
			<Router>
				<React.Fragment>
					<Header />
					<div className="ContainerApp">
						{car}
						<Switch>
							<AppliedRoute exact path="/" Component={App} routeData={{ whereFrom, whereTo, rideSubmitted }} funcs={{ confirmRide: this.confirmRideHandler }} />}/>
							<AppliedRoute path="/choose" Component={ChooseSongs} routeData={{chooseData}} funcs={{ add: this.addChooseData }} />
							<AppliedRoute path="/play" Component={PlayList} routeData={chooseData} funcs={{ add: this.addPlayData }} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</React.Fragment>
			</Router>
		);
	}
}


export default Routes;