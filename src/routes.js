import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ChooseSongs from './components/ChooseSongs/ChooseSongs'
import PlayList from './components/PlayList/PlayList'
import Car from './components/Car/Car'
import App from './App'

import _ from 'lodash';
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
			rideDuration: 360 * 1000 * 2,
			pickupDuration: 5000,
			stopDuration: 5000,
			showCar: false,
			rideSubmitted: false,
			whereFrom: "San Francisco International Airport (SFO), San Francisco, CA",
			whereTo: "42 Silicon Valley, Dumbarton Circle, Fremont, CA",
			chooseData: { songs: [] }
		}

		this.addChooseData = this.addChooseData.bind(this);
		this.addPlayData = this.addPlayData.bind(this);
		this.startAnimation = this.startAnimation.bind(this);
		this.progressBarHandler = this.progressBarHandler.bind(this);
		this.removeChooseData = this.removeChooseData.bind(this);
	}

	addChooseData = (data) => {
		for (let i = 0; i < this.state.chooseData.songs.length; i++) {
			if (this.state.chooseData.songs[i].id === data.id)
				return;
		}
		this.setState({ chooseData: { songs: [...this.state.chooseData.songs, data] } }, () => console.log('added new data to choose ', this.state.chooseData));
	}

	removeChooseData = (data) => {
		const { chooseData: { songs } } = this.state;
		console.log("data is " + data);
		_.remove(songs, { id: data });
		this.setState({ chooseData: { songs: songs } }, () => console.log('after removing ', songs));
	}

	addPlayData(data) {
		this.setState({ playData: data }, () => console.log('added new data to playData ', this.state.playData));
	}

	startAnimation() {
		const car = document.querySelector('.car')
		const { pickupDuration, stopDuration, rideDuration } = this.state;
		console.log(car);
		car.style.animation = `runCar ${pickupDuration / 1000}s linear forwards, runCarFinish ${rideDuration / 1000}s linear ${stopDuration / 1000 + pickupDuration / 1000}s forwards`;
		setTimeout(() => {
			const pickup = document.querySelector('.pickup');
			pickup.style.display = "none";
		}, pickupDuration + stopDuration);
	}

	progressBarHandler() {
		const { rideDuration, chooseData: { songs } } = this.state;
		let length = 0;
		songs.map(song => length += song.length);
		length *= 1000;
		const progressBar = document.querySelector('.progressBarApp');
		const lengthBar = ((length / (rideDuration ))) * 75;
		progressBar.style.width = `${lengthBar > 75 ? 75 : lengthBar}%`;
	}

	confirmRideHandler = (data) => {
		const { whereTo, whereFrom } = data;
		this.setState({ whereTo: whereTo, whereFrom: whereFrom, rideSubmitted: true, showCar: true }, () => console.log('this state = ', this.state));
	}

	render() {
		const car = this.state.showCar ? <Car countdown={90000} funcs={{ start: this.startAnimation }} /> : null;
		const {showCar, whereFrom, whereTo, rideSubmitted, chooseData } = this.state;
		console.log("HERE", this.state.chooseData)
		return (
			<Router>
				<React.Fragment>
					<Header showCar={showCar} />
					<div className="ContainerApp">
						{car}
						<Switch>
							<AppliedRoute exact path="/"
								Component={App}
								routeData={{ showCar, whereFrom, whereTo, rideSubmitted }}
								funcs={{ confirmRide: this.confirmRideHandler }} />}
							/>
							<AppliedRoute path="/choose"
								Component={ChooseSongs}
								routeData={chooseData}
								funcs={{ add: this.addChooseData, remove: this.removeChooseData, progress: this.progressBarHandler }}
							/>
							<AppliedRoute path="/play"
								Component={PlayList}
								routeData={chooseData}
								funcs={{ add: this.addPlayData }}
							/>
							<Route component={NotFound} />
						</Switch>
					</div>
				</React.Fragment>
			</Router>
		);
	}
}


export default Routes;