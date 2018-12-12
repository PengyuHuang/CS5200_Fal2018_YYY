import React, {Component} from 'react';

import AdServiceClient from "../../services/AdServiceClient";
import UserServiceClient from "../../services/UserServiceClient";

class CreateAd extends Component {
    constructor(props) {
        super(props);
       this.adService = AdServiceClient.instance;
        this.userService = UserServiceClient.instance;
        this.create_ad_service = this.create_ad_service.bind(this);
    }

    create_ad_service(ad) {
        //this.eventService.create_adservice(event);
        this.userService.user_post_ad_service(this.props.user.id,ad);
        alert("You created an advertisement!");
    }

    render() {
        let title= "";
        let picture_url = "";
        let link_url = "";
        let ad = {
            title:title,
            picture_url:picture_url,
            link_url:link_url,
            bill:0,
        };
        return (
            <div>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control"
                           onChange={event => ad.title = event.target.value}/>
                </div>
                <div className="form-group">
                    <label>Picture URL</label>
                    <input type="text" className="form-control"
                           onChange={event => ad.picture_url = event.target.value}/>
                </div>

                <div className="form-group">
                    <label>Link URL</label>
                    <input type="text" className="form-control"
                           onChange={event => ad.link_url = event.target.value}/>
                </div>

                <div className="form-group">
                    <label>Bill</label>
                    <input type="text" className="form-control"
                           onChange={event => ad.bill = event.target.value}/>
                </div>



                <div>
                    <button className="btn btn-info input-group-text" id="inputGroup-sizing-lg"
                            onClick={() => this.create_ad_service(ad)}> Create
                    </button>
                </div>
            </div>

        )
    }




}

export default (CreateAd);