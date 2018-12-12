let _singleton = Symbol();

class PostServiceClient {

    newURL = 'http://localhost:8080/api/';
    URL = 'http://cs5200-fall2018-mei.us-east-2.elasticbeanstalk.com/api/';

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new PostServiceClient(_singleton);
        return this[_singleton];
    }

    create_post_service(post) {
        return fetch(this.URL + 'post/create', {
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(res => res.json());
    }

    read_all_posts_service() {
        return fetch(this.URL + 'post/read/all').then(res => res.json());
    }

    read_post_replies_service(parent_post_id) {
        return fetch(this.URL + 'post/read/replies/' + parent_post_id).then(res => res.json());
    }

    read_post_no_parent_service() {
        return fetch(this.URL + 'post/read/no_parent/no_parent').then(res => res.json());
    }

    read_one_post_service(post_id) {
        return fetch(this.URL + 'post/read/' + post_id
        ).then(res => res.json());
    }

    update_post_service(post) {
        return fetch(this.URL + 'post/update/' + post.id, {
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        });

    }

    delete_post_service(post_id) {
        return fetch(this.URL + 'post/delete/' + post_id, {method: 'DELETE'});

    }
}

export default PostServiceClient;