let _singleton = Symbol();

class gameServiceClient {

    newURL = 'http://localhost:8080/api/';
    URL = 'http://cs5200-fall2018-mei.us-east-2.elasticbeanstalk.com/api/';

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new gameServiceClient(_singleton);
        return this[_singleton];
    }

    create_game_service(game) {
        console.log(game);
        return fetch(this.URL + 'game/create', {
            body: JSON.stringify(game),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(res => res.json());}

    read_all_games_service() {
        return fetch(this.URL + 'game/read/all').then(res => res.json());
    }

    read_games_score_rank_service() {
        return fetch(this.URL + '/game/read/score_rank').then(res => res.json());
    }

    read_games_random() {
        return fetch(this.URL + '/game/read/random').then(res => res.json());
    }

    read_games_search_by_name(name) {
        return fetch(this.URL + '/game/read/search/' + name).then(res => res.json());

    }

    read_one_game_service(game_id) {
        return fetch(this.URL + 'game/read/' + game_id
        ).then(res => res.json());
    }

    update_game_service(game) {
        return fetch(this.URL + 'game/update/' + game.id, {
            body: JSON.stringify(game),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        });
    }

    delete_game_service(game_id) {
        return fetch(this.URL + 'game/delete/' + game_id, {method: 'DELETE'});

    }
}

export default gameServiceClient;