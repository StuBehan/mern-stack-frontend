import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateGame from './components/createGame';
import ShowGames from './components/showGames';
import ShowGameDetails from './components/showGameDetails';
import UpdateGameInfo from './components/updateGameInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowGames} />
          <Route path='/create-game' component={CreateGame} />
          <Route path='/edit-game/:id' component={UpdateGameInfo} />
          <Route path='/show-game/:id' component={ShowGameDetails} />
        </div>
      </Router>
    );
  }
}

export default App;