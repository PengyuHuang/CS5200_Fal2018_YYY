import React, {Component} from 'react';
import UserServiceClient from "../../services/UserServiceClient";

import PostServiceClient from "../../services/PostServiceClient";

class DeletePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: "",
            click: false,
            posts: [],
        };
        this.postService = PostServiceClient.instance;
        this.userService = UserServiceClient.instance;
        this.handleChange = this.handleChange.bind(this);
        this.delete_post_service=this.delete_post_service.bind(this);
    }



    delete_post_service(post_id) {
        this.postService.delete_post_service(post_id);
        alert('Delete Successfully');
    }

    componentDidMount() {
        this.userService.user_find_authored_posts_service(this.props.user.id).then(res => this.setState({posts: res}));
        //
    }
    handleChange(postId) {
        // this.userService.user_join_post_service(1, this.state.posts[index].id).then(() => this.componentDidMount());
       // this.setState({postId:new_postId});
        this.postService.delete_post_service(postId).then(()=>this.componentDidMount());
        alert('Delete Successfully');
    }


    render() {
        return (
            <div>
                {this.state.posts.map((post, index) =>
                    <div key={index} className="card w-100">
                        <h3 className="card-header">{post.title}</h3>
                        <div className="card-body">
                            <h4 className="card-title">{"Content:"}{post.content}
                                <button className="btn btn-info float-right"
                                        onClick={() => this.handleChange(post.id)}
                                > Delete
                                </button>
                            </h4>
                        </div>
                    </div>
                )
                }
            </div>)
    }

}
export default DeletePost;