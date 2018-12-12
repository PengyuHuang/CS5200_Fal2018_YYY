let _singleton = Symbol();

class userUserServiceClient {

    newURL = 'http://localhost:8080/api/';
    URL = 'http://cs5200-fall2018-mei.us-east-2.elasticbeanstalk.com/api/';

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new userUserServiceClient(_singleton);
        return this[_singleton];
    }

    create_user_service(user) {
        return fetch(this.URL + 'user/create', {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(res => res.json());
    }

    read_all_users_service() {
        return fetch(this.URL + 'user/read/all').then(res => res.json());
    }

    read_one_user_service(user_id) {
        return fetch(this.URL + 'user/read/' + user_id
        ).then(res => res.json());
    }

    update_user_service(user) {
        return fetch(this.URL + 'user/update/' + user.id, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        });
    }

    delete_user_service(user_id) {
        return fetch(this.URL + 'user/delete/' + user_id, {method: 'DELETE'});
    }

    user_join_event_service(user_id, event_id) {
        return fetch(this.URL + 'user/joinEvent/' + user_id + "/" + event_id, {method: 'PUT'});
    }

    user_quit_event_service(user_id, event_id) {
        return fetch(this.URL + 'user/quitEvent/' + user_id + "/" + event_id, {method: 'PUT'});
    }


    user_find_joined_events_service(user_id) {
        return fetch(this.URL + 'user/findJoinedEvents/' + user_id).then(res => res.json());
    }

    user_find_not_joined_events_service(user_id) {
        return fetch(this.URL + 'user/findNotJoinedEvents/' + user_id).then(res => res.json());
    }

    user_find_not_joined_events_not_vip_service(user_id) {
        return fetch(this.URL + 'user/findNotJoinedEventsNotVIP/' + user_id).then(res => res.json());
    }


    user_host_event_service(user_id, event) {
        return fetch(this.URL + 'user/hostEvent/' + user_id, {
            body: JSON.stringify(event),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        });
    }

    user_post_post_service(user_id, post) {
        return fetch(this.URL + 'user/postPost/' + user_id, {
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        });
    }

    user_reply_post_service(user_id, post_id, post) {
        return fetch(this.URL + 'user/postPost/' + user_id + '/' + post_id, {
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        });
    }

    user_find_authored_posts_service(user_id) {
        return fetch(this.URL + 'user/findAuthoredPosts/' + user_id).then(res => res.json());
    }

    user_find_hosted_events_service(user_id) {
        return fetch(this.URL + 'user/findHostedEvents/' + user_id).then(res => res.json());
    }


    user_find_author_by_post_id(post_id) {
        return fetch(this.URL + 'user/findUserByPostId/' + post_id).then(res => res.json());

    }

    user_find_host_by_event_id(event_id) {
        return fetch(this.URL + 'user/findHostByEventId/' + event_id).then(res => res.json());

    }

    user_find_users_by_event_id(event_id) {
        return fetch(this.URL + 'user/findUsersByEventId/' + event_id).then(res => res.json());

    }

    user_post_ad_service(user_id, post) {
        return fetch(this.URL + 'user/postAd/' + user_id, {
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        });
    }

    user_find_authored_ads_service(user_id) {
        return fetch(this.URL + 'user/findAuthoredAds/' + user_id).then(res => res.json());
    }


}

export default userUserServiceClient;