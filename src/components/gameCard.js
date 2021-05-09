import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const GameCard = (props) => {
    const  game  = props.game;

    return(
        <div className="card-container">
            <img src={`${game.coverImage}`} alt="" width="500" height="600"/>
            <div className="desc">
                <h2>
                    <Link to={`/show-game/${game._id}`}>
                        { game.title }
                    </Link>
                </h2>
                <h3>{game.developer}</h3>
                <p>{game.dateReleased.slice(0,10)}</p>
            </div>
        </div>
    )
};

export default GameCard;