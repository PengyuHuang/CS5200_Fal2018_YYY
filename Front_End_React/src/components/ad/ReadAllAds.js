import React, {Component} from 'react';
import AdServiceClient from "../../services/AdServiceClient";

class ReadAllAds extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sps: {
                title: '',
                link_url: '',
                picture_url: ''
            }
        };
        this.adService = AdServiceClient.instance;
    }

    componentDidMount() {
        this.adService.find_top_billed_ad().then(res => this.setState({sps: res}));
    }


    render() {
        return (
            <div>
                <div className="card-deck">

                    <div className="card">
                        <h4><a className="link"
                               href={this.state.sps.link_url}
                               target="_blank"
                               rel="noopener noreferrer">
                            {this.state.sps.title}</a></h4>
                        <img className="card-img-bottom"
                             src={this.state.sps.picture_url}
                             alt="Card cap"/>
                    </div>


                    <div className="card">
                        <h4><a className="link"
                               href="https://store.steampowered.com/app/570/Dota_2/"
                               target="_blank"
                               rel="noopener noreferrer">
                            Dota 2</a></h4>
                        <img className="card-img-bottom"
                             src="https://steamcdn-a.akamaihd.net/steam/apps/570/header.jpg?t=1543590720"
                             alt="Card cap"/>
                    </div>


                    <div className="card">
                        <h4><a className="link"
                               href="https://www.nintendo.com/games/detail/super-mario-party-switch"
                               target="_blank"
                               rel="noopener noreferrer">
                            Super Mario Party</a></h4>
                        <img className="card-img-bottom"
                             src="https://s.newsweek.com/sites/www.newsweek.com/files/styles/embed_tablet/public/2018/10/01/super-mario-party-box-art.jpg"
                             alt="Card cap"/>
                    </div>


                </div>
                <div className="card-deck">

                    <div className="card">
                        <h4><a className="link"
                               href="https://assassinscreed.ubisoft.com/game/en-us/home"
                               target="_blank"
                               rel="noopener noreferrer">
                            Assassin's Creed Odyssey</a></h4>
                        <img className="card-img-bottom"
                             src="https://ubistatic19-a.akamaihd.net/marketingresource/en-us/assassins-creed/assassins-creed-odyssey/assets/images/acd-home-launch_trailer_accolades-thumbnail-960_336070.jpg"

                             alt="Card  cap"/>
                    </div>


                    <div className="card">
                        <h4><a className="link"
                               href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/"
                               target="_blank"
                               rel="noopener noreferrer">
                            CS GO</a></h4>
                        <img className="card-img-bottom"
                             src="http://www.mweb.co.za/DesktopModules/DigArticle/MediaHandler.ashx?portalid=20&moduleid
  =5259&mediaid=54145&width=665&height=400" alt="Card  cap"/>
                    </div>


                    <div className="card">
                        <h4><a className="link"
                               href="https://us.shop.battle.net/en-us/product/warcraft-iii-reforged"
                               target="_blank"
                               rel="noopener noreferrer">
                            Warcraft® III: Reforged</a></h4>
                        <img className="card-img-bottom"
                             src="https://i.amz.mshcdn.com/SfKS-icuMcbdtPDTaoJ2mERlo2Q=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F876485%2F0940418b-8b2a-49f5-a857-e0439888105c.jpg"
                             alt="Card cap"/>
                    </div>


                </div>
            </div>

        )
    }

}

export default ReadAllAds;

/*

 */


