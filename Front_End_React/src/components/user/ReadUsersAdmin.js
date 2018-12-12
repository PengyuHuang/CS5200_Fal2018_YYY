import React, {Component} from 'react';

import UserServiceClient from "../../services/UserServiceClient";



class ReadUsersAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
        this.userService = UserServiceClient.instance;
        this.handleChange = this.handleChange.bind(this);
        this.read_user_jumbo = this.read_user_jumbo.bind(this);
    }

    componentDidMount() {
        this.userService.read_all_users_service().then(res => this.setState({users: res}));
    }


    handleChange(new_index) {
        this.setState({index: new_index});
        this.setState({click: true});
        window.scrollTo(0, 160);
    }


    render() {
        return (
            <div>
                {this.state.click ? this.read_user_jumbo(this.state.index) : null}
                {this.state.users.map((user, index) =>
                    <div key={index}
                         className={user.type === "VIP_student" ? "card w-100 bg-warning" : "card w-100"}>
                        <h3 className="card-header"> {user.username} </h3>
                        <div className="card-body">
                            {user.priority === "VIP_student" ? <h4>VIP Post</h4> : null}

                            <h4 className="card-title">{"Id:"}{user.id}
                                <button className="btn btn-info float-right"
                                        onClick={() => this.handleChange(index)}
                                > More Details
                                </button>
                            </h4>
                        </div>
                    </div>
                )
                }
            </div>)
    }

    read_user_jumbo(index) {
        return (
            <div className="jumbotron bg-white">
                <h1>   {this.state.users[index].username}</h1>
                <h3 className="lead">
                    <div>{"Id:"}{this.state.users[index].id}</div>
                    <div>{"Password:"}{this.state.users[index].password}</div>
                    <div>{"Email:"} {this.state.users[index].email} </div>

                </h3>
                <hr/>
            </div>

        )
    }
}



export default (ReadUsersAdmin);