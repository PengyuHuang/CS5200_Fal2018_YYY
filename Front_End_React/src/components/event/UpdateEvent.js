import {Component} from "react";
import UserServiceClient from "../../services/UserServiceClient";
import UpdateEventDetail from "./UpdateEventDetail"
import React from "react";

class UpdateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventId: "",
            click: false,
            events: [],
        };

        this.userService = UserServiceClient.instance;
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.userService.user_find_hosted_events_service(this.props.user.id).then(res => this.setState({events: res}));
        //
    }

    handleChange(new_eventId) {
        // this.userService.user_join_event_service(1, this.state.events[index].id).then(() => this.componentDidMount());
        this.setState({eventId:new_eventId});
        this.setState({click: true});
        window.scrollTo(0,0);

    }
    
    render() {
        return (
            <div>
                {this.state.click ? <UpdateEventDetail eventId={this.state.eventId}/> : null}
                {this.state.events.map((event, index) =>
                    <div key={index }
                         className=  {event.priority===1? "card w-100 bg-warning": "card w-100" } >
                        <h3 className= "card-header"> {event.name} </h3>
                        <div className="card-body">
                            {event.priority===1? <h4>VIP Students Only </h4>:null}
                            <h4 className="card-title">{"Event Description:"}{event.description}
                                <button className="btn btn-info float-right"
                                        onClick={() => this.handleChange(event.id)}
                                > Update
                                </button>
                            </h4>
                        </div>
                    </div>
                )
                }
            </div>)
    }

}
export default UpdateEvent;