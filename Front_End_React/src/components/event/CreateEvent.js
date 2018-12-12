import React, {Component} from 'react';

import EventServiceClient from "../../services/EventServiceClient";
import UserServiceClient from "../../services/UserServiceClient";

class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.eventService = EventServiceClient.instance;
        this.userService = UserServiceClient.instance;
        this.create_event_service = this.create_event_service.bind(this);
    }

    create_event_service(event) {
        //this.eventService.create_event_service(event);
        this.userService.user_host_event_service(this.props.user.id,event);
        alert("You created an event!");
    }

    render() {
        let name = "";
        let description = "";
        let game="";
        let location = "";
        let date = "";
        let priority= 0;
        let event_ = {
            name: name,
            description: description,
            location: location,
            game:game,
            date: date,
            host_name:this.props.user.username,
            priority:priority
        };
        return (
            <div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control"
                           onChange={event => event_.name = event.target.value}/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" className="form-control"
                           onChange={event => event_.description = event.target.value}/>
                </div>

                <div className="form-group">
                    <label>Game</label>
                    <input type="text" className="form-control"
                           onChange={event => event_.game = event.target.value}/>
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input type="text" className="form-control"
                           onChange={event => event_.location = event.target.value}/>
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input type="text" className="form-control"
                           onChange={event => event_.date = event.target.value}/>
                </div>


                <div className="form-group">
                    <label> For VIP only </label>
                    <select onChange={event => event_.priority = (event.target.value==="Yes"?1:0)}>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>

                <div>
                    <button className="btn btn-info input-group-text" id="inputGroup-sizing-lg"
                            onClick={() => this.create_event_service(event_)}> Create
                    </button>
                </div>
            </div>

        )
    }





}

export default (CreateEvent);