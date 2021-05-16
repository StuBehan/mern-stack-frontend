import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import  GameCard from './gameCard';

class ShowGames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/games')
      .then(response => {
        this.setState({
          games: response.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowGames');
      })
  };


  render() {
    const games = this.state.games;
    console.log("PrintGames: " + games);
    let gameList;

    if(!games) {
      gameList = "there is no game record!";
    } else {
      gameList = games.map((game, k) =>
        <GameCard game={game} key={k} />
      );
    }

    return (
      <div className="ShowGames">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <Link to="/create-game" className="btn btn-outline-warning float-right">
                + Add New Game
              </Link>              
            </div>
            <div className="col-md-11">
              <h2 className="display-4 text-center">Games List</h2>
              <br />
              <hr />
            </div>
          </div>
          <div className="list">
            {gameList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowGames;