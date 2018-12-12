import React, {Component} from 'react';

import GameServiceClient from "../../services/GameServiceClient";

class RandomGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: '',
            click: false,
            games: [],
        };
        this.gameService = GameServiceClient.instance;
    }

    componentDidMount() {
        this.gameService.read_games_random().then(res => this.setState({games: res}));
    }

    handleChange(new_index) {
        this.setState({index: new_index});
        this.setState({click: true});

        window.scrollTo(0,0);
    }


    render() {
        return (
            <div>
                {this.state.click ? this.read_game_jumbo(this.state.index) : null}
                {this.state.games.map((game, index) =>
                    <div key={index} className="card w-100">
                        <h3 className="card-header">{game.name}</h3>
                        <div className="card-body">
                            <h4 className="card-title">{"score_rank:"}{game.score_rank}
                                <button className="btn btn-info float-right"
                                        onClick={() => this.handleChange(index)}
                                > More Details
                                </button>
                            </h4>
                        </div>
                    </div>
                )
                }
            </div>)
    }

    read_game_jumbo(index) {
        return (
            <div className="jumbotron-fluid bg-white">
                <h1 >   {this.state.games[index].name}</h1>
                <h3 className="lead">
                    <div>{"Game Id:"}{this.state.games[index].id}</div>
                    <div>{"Name:"}{this.state.games[index].name}</div>
                    <div>{"Developer:"}{this.state.games[index].developer}</div>
                    <div>{"Score_rank:"}{this.state.games[index].score_rank}</div>
                    <div>{"Positive:"}{this.state.games[index].positive}</div>
                    <div>{"Negative:"}{this.state.games[index].negative}</div>
                </h3>
                <hr/>
            </div>

        )
    }


}


export default (RandomGames);