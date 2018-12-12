import React, {Component} from 'react';

import EventServiceClient from "../../services/EventServiceClient";

class UpdateEventDetail extends Component {
    constructor(props) {
        super(props);
        this.eventService = EventServiceClient.instance;
    }

    update_event_service(event) {
        this.eventService.update_event_service(event);
        alert('Update Successfully');
    }

    render() {
        let id = this.props.eventId;
        let name = "";
        let description = "";
        let game="";
        let location="";
        let date="";
        let event_ = {
            id: id,
            name: name,
            description: description,
            game:game,
            location:location,
            date:date
        };
        return (
                <div>

                    <div className="form-group">
                        <label>New Name</label>
                        <input type="text" className="form-control"
                               onChange={event => event_.name = event.target.value}/>
                    </div>
                    <div className="form-group">
                        <label>New Description</label>
                        <input type="text" className="form-control"
                               onChange={event => event_.description = event.target.value}/>
                    </div>
                    <div className="form-group">
                        <label>New Description</label>
                        <input type="text" className="form-control"
                               onChange={event => event_.description = event.target.value}/>
                    </div>

                    <div className="form-group">
                        <label>New Location</label>
                        <input type="text" className="form-control"
                               onChange={event => event_.game = event.target.value}/>
                    </div>
                    <div className="form-group">
                        <label>New Date</label>
                        <input type="text" className="form-control"
                               onChange={event => event_.date = event.target.value}/>
                    </div>


                <div>
                    <button  className="btn btn-info input-group-text" id="inputGroup-sizing-lg"
                        onClick={() => this.update_event_service(event_)}> Update</button>
                </div>
                </div>
        )
    }


}

export default (UpdateEventDetail);