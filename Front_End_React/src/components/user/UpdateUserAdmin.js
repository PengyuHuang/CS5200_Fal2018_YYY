import React, {Component} from 'react';


import UserServiceClient from "../../services/UserServiceClient";
class UpdateUserAdmin extends Component {
    constructor(props) {
        super(props);
        this.userService = UserServiceClient.instance;
    }

    update_user_service(user) {
        this.userService.update_user_service(user);
        alert('You have updated an user successfully');
    }

    render() {
        let id = "";
        let username = "";
        let password = "";
        let email = "";
        let user = {
            id: id,
            username: username,
            password: password,
            email: email
        };
        return (
            <div>
                <div className="form-group">
                    <label>User Id</label>
                    <input type="text" className="form-control"
                           onChange={event => user.id = event.target.value}/>
                </div>
                <div className="form-group">
                    <label>New UserName</label>
                    <input type="text" className="form-control"
                           onChange={event => user.username = event.target.value}/>
                </div>
                <div className="form-group">
                    <label>New Password</label>
                    <input type="password" className="form-control"
                           onChange={event => user.password = event.target.value}/>
                </div>


                <div className="form-group">
                    <label>New Email</label>
                    <input type="text" className="form-control"
                           onChange={event => user.email = event.target.value}/>
                </div>
                <div>
                    <button className="btn btn-info input-group-text" id="inputGroup-sizing-lg"
                            onClick={() => this.update_user_service(user)}> Update
                    </button>
                </div>
            </div>
        )
    }
}

export default (UpdateUserAdmin);