
import React, {Component} from "react";

import CreateAd from "./CreateAd";
import DeleteAd from "./DeleteAd";
import ReadAllAds from "./ReadAllAds";
import DeleteAdAdmin from "./DeleteAdAdmin";
import AdServiceClient from "../../services/AdServiceClient";
import GameServiceClient from "../../services/GameServiceClient";

class AdManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            which: 'Games For You!',
            games:[],
            sps:[]
        };
        this.ad_return=this.ad_return.bind(this);
        this.admin_return=this.admin_return.bind(this);
        this.adService = AdServiceClient.instance;
        this.gameService = GameServiceClient.instance;
    }

    componentDidMount() {
        this.adService.read_all_ads_service().then(res=>this.setState({sps:res}));
        this.gameService.read_all_games_service().then(res => this.setState({games: res}));
    }

    render() {
        let component = null;
        switch (this.state.which) {

            case "Create An Advertisement":
                component = <CreateAd user={this.props.user}/>;
                break;
            case "Delete An Advertisement":
                component = <DeleteAd user={this.props.user}/>;
                break;
            case "Delete An Advertisement Admin":
                component = <DeleteAdAdmin user={this.props.user}/>;
                break;
            default:
                component = null;
        }

        let role_return = null;

        switch (this.props.user.type) {
            case "advertiser":
                role_return =this.ad_return();
                break;
            case "admin":
                role_return = this.admin_return();
                break;
            default:
                role_return = null;
        }

        return (
            <div>
                <hr/>
                    <ReadAllAds/>
                <hr/>
                {role_return}
                <h1><strong>{this.state.which}</strong></h1>
                <hr/>
                {component}
            </div>
        )
    }



    admin_return(){
        return(
        <div>
            <div className="btn-group d-flex" role="group">

                <button className="btn btn-info w-100"
                        onClick={() => this.setState({which: "Create An Advertisement"})}>
                    Create An Advertisement
                </button>

                <button className="btn btn-info w-100"
                        onClick={() => this.setState({which: "Delete An Advertisement Admin"})}>Delete An
                    Advertisement
                </button>

            </div>
        </div>)


    }

    ad_return() {
        return (
            <div>
                <div className="btn-group d-flex" role="group">
                    <button className="btn btn-info w-100"
                            onClick={() => this.setState({which: "Create An Advertisement"})}>
                        Create An Advertisement
                    </button>
                    <button className="btn btn-info w-100"
                            onClick={() => this.setState({which: "Delete An Advertisement"})}>Delete An
                        Advertisement
                    </button>

                </div>
            </div>)

    }


}

export default AdManager;

/*
 case "All Advertisements":
                component = <span>{"Log in as an Advertiser and post your game here! All gamers can see it!"}</span>;
                break;
  <button className="btn btn-info w-100"
                                    onClick={() => this.setState({which: "Edit An Advertisement"})}> Edit An
                                Advertisement
                            </button>

                            <button className="btn btn-info w-100"
                                    onClick={() => this.setState({which: "Delete An Advertisement"})}>Delete An
                                Advertisement
                            </button>
 let component = null;
        switch (this.state.which) {
            case "All Advertisements":
                component = <ReadEventsNew user={this.props.user}/>;
                break;
            case "Manager Your Advertisement":
                component = <QuitEvent user={this.props.user}/>;
                break;
            default:
                component = <ReadEventsNew/>;
 */