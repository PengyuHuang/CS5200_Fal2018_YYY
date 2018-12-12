let _singleton = Symbol();

class adServiceClient {
    newURL = 'http://localhost:8080/api/';
    URL = 'http://cs5200-fall2018-mei.us-east-2.elasticbeanstalk.com/api/';


    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new adServiceClient(_singleton);
        return this[_singleton];
    }

    create_ad_service(ad) {
        return fetch(this.URL + 'ad/create', {
            body: JSON.stringify(ad),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });
    }

    read_all_ads_service() {
        return fetch(this.URL + 'ad/read/all').then(res => res.json());
    }

    read_top_ads_service() {
        return fetch(this.URL + 'ad/read/top/six').then(res => res.json());
    }

    read_one_ad_service(ad_id) {
        return fetch(this.URL + 'ad/read/' + ad_id
        ).then(res => res.json());
    }

    update_ad_service(ad) {
        return fetch(this.URL + 'ad/update/' + ad.id, {
            body: JSON.stringify(ad),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        });
    }

    delete_ad_service(ad_id) {

        return fetch(this.URL + 'ad/delete/' + ad_id, {method: 'DELETE'});
    }

    find_top_billed_ad() {
        return fetch(this.URL + 'ad/read/top/').then(res => res.json());
    }


}

export default adServiceClient;