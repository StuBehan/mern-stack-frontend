import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const GameCard = (props) => {
    const  game  = props.game;

    return(
        <div className="card-container">
            <img src="https://www.mobygames.com/images/covers/l/632408-half-life-windows-front-cover.jpg" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-game/${game._id}`}>
                        { game.title }
                    </Link>
                </h2>
                <h3>{game.developer}</h3>
                <p>{game.dateReleased}</p>
            </div>
        </div>
    )
};

export default GameCard;