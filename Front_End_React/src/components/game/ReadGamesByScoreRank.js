import React, {Component} from 'react';

import {BrowserRouter as Router, Link, Route} from "react-router-dom";

import GameServiceClient from "../../services/GameServiceClient";

class ReadGamesByScoreRank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
        };
        this.gameService = GameServiceClient.instance;
    }

    componentDidMount() {
        this.gameService.read_games_score_rank_service().then(res => this.setState({games: res}));
    }


    render(){
        return (
            <Router>
                <div>
                    {this.state.games.map((game,index) =>
                        <div key={index} ><Link to={`/read_games_score_rank/${game.id}`}>
                            {"id:"} {game.id} {"name"} {game.name} </Link></div>)
                    }
                    {this.state.games.map((game,index) =>
                        <Route key={index}  path={`/read_games_score_rank/${game.id}`}
                               render ={()=>this.read_game(index)} />)
                    }
                </div>
            </Router>
        );
    }


    read_game(index) {
        return (
            <h2 >
                <div  >
                    <div>{"id:"}{this.state.games[index].id}</div>
                    <div>{"name:"}{this.state.games[index].name}</div>
                    <div>{"developer:"}{this.state.games[index].developer}</div>
                    <div>{"score_rank:"}{this.state.games[index].score_rank}</div>
                    <div>{"positive:"}{this.state.games[index].positive}</div>
                    <div>{"negative:"}{this.state.games[index].negative}</div>
                </div>
            </h2>
        );
    }
}



export default (ReadGamesByScoreRank);
