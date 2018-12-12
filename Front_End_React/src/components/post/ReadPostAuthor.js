import React, {Component} from 'react';

import UserServiceClient from "../../services/UserServiceClient";

class ReadPostAuthor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author:{
                username: "",
                email: "",
                type: ""
            }
        };
        this.userService = UserServiceClient.instance;

    }

    componentDidMount() {
        this.userService.user_find_author_by_post_id(this.props.post_id).then(res=>this.setState ({author:res}));
    }

    render() {
        // console.log(this.state.author);
        return    <div className="card w-10 bg-white" >
            <h3 className="lead">
                <div>{"Author Id:"}{this.state.author.id}</div>
                <div>{"Author Name:"}{this.state.author.username}</div>
                <div>{"Author Email:"}{this.state.author.email}</div>
                <div>{"Author Type:"}{this.state.author.type}</div>
            </h3>
        </div>
    }
}

export default ReadPostAuthor;