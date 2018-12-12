import React from "react";

import GameServiceClient from "../../services/GameServiceClient";




class ReadGamesById extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: '',
            click_search: false,
            click_details: false,
            games: [],
        };
        this.gameService = GameServiceClient.instance;
        this.handleDetailButton=this.handleDetailButton.bind(this);
        this.handleSearchButton=this.handleSearchButton.bind(this);
    }

    componentDidMount() {
        this.gameService.read_one_game_service(this.props.id).then( res=>this.setState({game:res}));

    }

    handleSearchButton(name) {
        this.setState({click_details:false});
        this.gameService.read_games_search_by_name(name).then(res => this.setState({games: res}));
        this.setState({click_search: true});
    }

    handleDetailButton(new_index) {
        this.setState({index: new_index});
        this.setState({click_details: true});
        window.scrollTo(0, 0);
    }

    render() {
        let temp_name = '';
        return (
            <div>
                <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <button className="btn btn-info input-group-text" id="inputGroup-sizing-lg"
                                onClick={() => this.handleSearchButton(temp_name)}
                        >Search
                        </button>
                    </div>
                    <input type="text" className="form-control" placeholder={"Enter game Name"}
                           onChange={event => temp_name = event.target.value}>
                    </input>
                </div>
                <hr/>
                <div>
                    {this.state.click_details && this.state.games.length!==0? this.read_game_jumbo(this.state.index) : null}
                    <hr/>
                    {this.state.click_search ? this.state.games.map((game, index) =>
                        <div key={index} className="card w-100">
                            <h3 className="card-header">{game.name}</h3>
                            <div className="card-body">
                                <h4 className="card-title">{"score_rank:"}{game.score_rank}
                                    <button className="btn btn-info float-right"
                                            onClick={() => this.handleDetailButton(index)}
                                    > More Details
                                    </button>
                                </h4>
                            </div>
                        </div>
                    ) : null}

                </div>
            </div>

        )
    }

    read_game_jumbo(index) {
        return (
            <div className="jumbotron-fluid bg-white">
                <h1>   {this.state.games[index].name}</h1>
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

export default ReadGamesById;