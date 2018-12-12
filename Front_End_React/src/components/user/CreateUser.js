import React, {Component} from 'react';

import UserServiceClient from "../../services/UserServiceClient";

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.userService = UserServiceClient.instance;
    }

    create_user_service(user) {
        this.userService.create_user_service(user).then(() => this.props.history.push("/"));
        alert('Create User Successfully');
    }


    render() {
        let username = "";
        let password = "";
        let email = "";
        let type = "student";
        let user = {
            username: username,
            password: password,
            email: email,
            type: type
        };
        return (

            <form>
                <div className="form-group">
                    <label>UserName</label>
                    <input type="text" className="form-control"
                           onChange={event => user.username = event.target.value}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"
                           onChange={event => user.password = event.target.value}/>
                </div>


                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control"
                           onChange={event => user.email = event.target.value}/>
                </div>

                <div className="form-group">
                    <label> Role </label>

                    <select onChange={event => user.type = event.target.value}>
                        <option value="student">Student</option>
                        <option value="vip_student">VIP_Student</option>
                        <option value="organization">Organization</option>
                        <option value="advertiser">Advertiser</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <div>
                    <button className="btn btn-info input-group-text" id="inputGroup-sizing-lg"
                            onClick={() => this.create_user_service(user)}> Create
                    </button>
                </div>
            </form>


        )
    }

}

export default (CreateUser);