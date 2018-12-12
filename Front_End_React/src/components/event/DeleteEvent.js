import {Component} from "react";

import UserServiceClient from "../../services/UserServiceClient";

import React from "react";
import EventServiceClient from "../../services/EventServiceClient";

class DeleteEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventId: "",
            click: false,
            events: [],
        };
        this.eventService = EventServiceClient.instance;
        this.userService = UserServiceClient.instance;
        this.handleChange = this.handleChange.bind(this);
        this.delete_event_service=this.delete_event_service.bind(this);
    }

    delete_event_service(event_id) {
        this.eventService.delete_event_service(event_id);
        alert('Delete Successfully');
    }

    componentDidMount() {
        this.userService.user_find_hosted_events_service(this.props.user.id).then(res => this.setState({events: res}));
        //
    }
    handleChange(eventId) {
        // this.userService.user_join_event_service(1, this.state.events[index].id).then(() => this.componentDidMount());
        // this.setState({eventId:new_eventId});
        this.eventService.delete_event_service(eventId).then(()=>this.componentDidMount());
        alert('Delete Successfully');
    }


    render() {
        return (
            <div>
                {this.state.events.map((event, index) =>
                    <div key={index }
                         className=  {event.priority===1? "card w-100 bg-warning": "card w-100" } >
                        <h3 className= "card-header"> {event.name} </h3>
                        <div className="card-body">
                            {event.priority===1? <h4>VIP Students Only </h4>:null}
                            <h4 className="card-title">{"Event Description:"}{event.description}
                                <button className="btn btn-info float-right"
                                        onClick={() => this.handleChange(event.id)}
                                > Delete
                                </button>
                            </h4>
                        </div>
                    </div>
                )
                }
            </div>)
    }

}
export default DeleteEvent;