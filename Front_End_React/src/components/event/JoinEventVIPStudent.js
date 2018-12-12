
import UserServiceClient from "../../services/UserServiceClient";
import React, {Component} from "react";


class JoinEventVIPStudent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: '',
            click: false,
            events: [],
        };
        this.userService = UserServiceClient.instance;
    }

    componentDidMount() {
        this.userService.user_find_not_joined_events_service(this.props.user.id).then(res => this.setState({events: res}));
        //
    }

    handleChange(index) {
        this.userService.user_join_event_service(this.props.user.id, this.state.events[index].id).then(() => this.componentDidMount());
        alert("You joined an event!");

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
                                        onClick={() => this.handleChange(index)}
                                > Join
                                </button>
                            </h4>
                        </div>
                    </div>
                )
                }
            </div>)
    }


}

export default JoinEventVIPStudent;
