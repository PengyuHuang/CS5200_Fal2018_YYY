import React, {Component} from 'react';

import PostServiceClient from "../../services/PostServiceClient";
import UserServiceClient from "../../services/UserServiceClient";

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.userService = UserServiceClient.instance;
        this.postService = PostServiceClient.instance;
        this.create_post_service=this.create_post_service.bind(this);
    }

    create_post_service(post) {
       // this.postService.create_post_service(post);
        this.userService.user_post_post_service(this.props.user.id,post);
       alert('Post Successfully!');
    }
    render () {
        console.log(this.props.user.type);
        let title = "";
        let content = "";
        let game="";
        let priority= this.props.user.type==="vip_student"? 1:0;
        let post = {
            title: title,
            content: content,
            game:game,
            priority:priority,
            author_name:this.props.user.username
        };
        return (
            <div>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control"
                           onChange={event => post.title = event.target.value}/>
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <input type="text" className="form-control"
                           onChange={event => post.content = event.target.value}/>
                </div>
                <div className="form-group">
                    <label>Game</label>
                    <input type="text" className="form-control"
                           onChange={event => post.game = event.target.value}/>
                </div>

                <div>
                    <button className="btn btn-info input-group-text" id="inputGroup-sizing-lg"
                            onClick={() => this.create_post_service(post)}> Create
                    </button>
                </div>
            </div>
           
        )
    }

}

export default (CreatePost);