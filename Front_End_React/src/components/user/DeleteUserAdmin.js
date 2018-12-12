import React, {Component} from 'react';

import UserServiceClient from "../../services/UserServiceClient";

class DeleteUserAdmin extends Component {
    constructor(props) {
        super(props);
        this.userService = UserServiceClient.instance;
    }

    delete_user_service(user_id) {
        alert('Delete Successfully');
        this.userService.delete_user_service(user_id);
    }


    render() {
        let user_id;
        return (
            <div>
                <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <button className="btn btn-info input-group-text" id="inputGroup-sizing-lg"
                                onClick={() => this.delete_user_service(user_id)}
                        >Delete an User
                        </button>
                    </div>
                    <input type="text" className="form-control" placeholder={"Please Enter User ID to be deleted"}
                           onChange={event => user_id = event.target.value}>
                    </input>
                </div>
            </div>
        );
    }

}
export default (DeleteUserAdmin);