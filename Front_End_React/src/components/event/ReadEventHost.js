import React, {Component} from 'react';

import UserServiceClient from "../../services/UserServiceClient";

class ReadEventHost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            host:{
                username: "",
                email: "",
                type: ""
            }
        };
        this.userService = UserServiceClient.instance;

    }

    componentDidMount() {
        this.userService.user_find_host_by_event_id(this.props.event_id).then(res=>this.setState ({host:res}));
    }

   render() {
       // console.log(this.state.host);
       return    <div className="card w-10 bg-white" >
           <h3 className="lead">
               <div>{"Host Id:"}{this.state.host.id}</div>
               <div>{"Host Name:"}{this.state.host.username}</div>
               <div>{"Host Email:"}{this.state.host.email}</div>
           </h3>
       </div>
   }
}

export default ReadEventHost;