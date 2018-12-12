import React, {Component} from 'react';

import UserServiceClient from "../../services/UserServiceClient";
import EventServiceClient from "../../services/EventServiceClient";
import AdServiceClient from "../../services/AdServiceClient";

class DeleteAd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adId: "",
            click: false,
            ads: [],
        };
        this.adService = AdServiceClient.instance;
        this.eventService=EventServiceClient.instance;
        this.userService = UserServiceClient.instance;
        this.handleChange = this.handleChange.bind(this);
       // this.delete_ad_service=this.delete_ad_service.bind(this);
    }


    componentDidMount() {
       //this.adService.read_all_ads_service().then(res => this.setState({ads: res}));
       //read_all_ads_service()
         this.userService.user_find_authored_ads_service(this.props.user.id).then(res => this.setState({ads: res}));
        //
    }


    handleChange(adId) {
        // this.userService.user_join_ad_service(1, this.state.ads[index].id).then(() => this.componentDidMount());
        // this.setState({adId:new_adId});
        this.adService.delete_ad_service(adId).then(()=>this.componentDidMount());
        alert('Delete Successfully');
    }


    render() {
        return (
            <div>
                {this.state.ads.map((ad, index) =>
                    <div key={index }
                         className=  {ad.priority===1? "card w-100 bg-warning": "card w-100" } >
                        <h3 className= "card-body"> {ad.title} </h3>
                                <button className="btn btn-info float-right"
                                        onClick={() => this.handleChange(ad.id)}
                                > Delete
                                </button>
                    </div>
                )
                }
            </div>)
    }

}
export default DeleteAd;