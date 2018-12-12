import React, {Component} from 'react';

import UserServiceClient from "../../services/UserServiceClient";
import AdServiceClient from "../../services/AdServiceClient";

class DeleteAdAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adId: "",
            click: false,
            ads: [],
        };
        this.adService = AdServiceClient.instance;
        this.userService = UserServiceClient.instance;
        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount() {
        this.adService.read_all_ads_service().then(res => this.setState({ads: res}));

    }


    handleChange(adId) {
        this.adService.delete_ad_service(adId).then(()=>this.componentDidMount());
        alert('Delete Successfully');
    }


    render() {
        return (
            <div>
                {this.state.ads.map((ad, index) =>
                    <div key={index }
                         className=  {ad.priority===1? "card w-100 bg-warning": "card w-100" } >
                        <h3 className= "card-header"> {ad.title} </h3>
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
export default DeleteAdAdmin;