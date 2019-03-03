import React from 'react';
import Header from './components/Header'
import ChooseSongs from "./components/ChooseSongs/ChooseSongs";
class App extends React.Component {
  render() {
    return(
      <div className="ui container">
        <Header />
        <div>
          <ChooseSongs />
        </div>
      </div>
    );
  }
}

export default App;