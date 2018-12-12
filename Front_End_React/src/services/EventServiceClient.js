let _singleton = Symbol();

class eventServiceClient {
    newURL = 'http://localhost:8080/api/';
    URL = 'http://cs5200-fall2018-mei.us-east-2.elasticbeanstalk.com/api/';

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new eventServiceClient(_singleton);
        return this[_singleton];
    }

    create_event_service(event) {
        return fetch(this.URL + 'event/create', {
            body: JSON.stringify(event),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });
    }

    read_all_events_service() {
        return fetch(this.URL + 'event/read/all').then(res => res.json());
    }

    read_one_event_service(event_id) {
        return fetch(this.URL + 'event/read/' + event_id
        ).then(res => res.json());
    }

    update_event_service(event) {
        return fetch(this.URL + 'event/update/' + event.id, {
            body: JSON.stringify(event),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        });
    }

    delete_event_service(event_id) {
        return fetch(this.URL + 'event/delete/' + event_id, {method: 'DELETE'});

    }

}

export default eventServiceClient;