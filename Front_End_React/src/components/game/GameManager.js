import React, {Component} from 'react';

import GameSearch from "./ReadGamesByNameSearch";
import ReadGamesByScoreNew from "./ReadGamesByScoreNew";
import RandomGames from "./RandomGames";


class GameManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            which: 'Look Up a Game'
        };
    }


    render() {
        let component = null;
        switch (this.state.which) {
            case "Top Games By Score":
                component = <ReadGamesByScoreNew/>;
                break;
            case "Random Games For You":
                component = <RandomGames/>;
                break;
            default:
                component = <GameSearch/>;
        }


        return (
            <div>
                <div className="jumbotron jumbotron-fluid bg-white">
                    <h1>Games! You can find games here!</h1>
                    <p>
                    </p>
                </div>
                <div className="btn-group d-flex" role="group">
                    <button className="btn btn-info w-100"
                            onClick={() => this.setState({which: "Look Up a Game"})}>Look Up a Game
                    </button>

                    <button className="btn btn-info w-100"
                            onClick={() => this.setState({which: "Top Games By Score"})}> Top Games By Score
                    </button>


                    <button className="btn btn-info w-100"
                            onClick={() => this.setState({which: "Random Games For You"})}>Random Games For You
                    </button>

                </div>
                <h1><strong>{this.state.which}</strong></h1>
                <hr/>
                {component}
            </div>
        )


    }
}


export default GameManager;

/*
    <button className="btn btn-info w-100"
                                onClick={() => this.setState({which: "Top Games By Genre"})}>Top Games By Genre</button>
 */