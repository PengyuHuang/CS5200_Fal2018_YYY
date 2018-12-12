import React, {Component} from 'react';
import UserServiceClient from "../../services/UserServiceClient";


class ReadEventAttendants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attendants: []
        };
        this.userService = UserServiceClient.instance;

    }

    componentDidMount() {
        this.userService.user_find_users_by_event_id(this.props.event_id).then(res => this.setState({attendants: res}));
    }

    render() {
return(
    <div>
    {this.state.attendants.map((attendant, index) =>
    <div key={index}>
    {attendant.username} {"  is attending!"}
    </div>
    )

    }
    </div>

)

    }
}
export default ReadEventAttendants;

    /*
      <div className="card w-10 bg-white" >
            <h3 className="lead">
                <div>{"Host Id:"}{this.state.host.id}</div>
                <div>{"Host Name:"}{this.state.host.username}</div>
            </h3>
        </div>
    }
     */