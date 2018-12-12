import {Component} from "react";
import UserServiceClient from "../../services/UserServiceClient";
import UpdatePostDetail from "./UpdatePostDetail"
import React from "react";
import PostServiceClient from "../../services/PostServiceClient";

class UpdatePostAdmin extends Component {
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
    }

    componentDidMount() {
        this.postService.read_all_posts_service().then(res => this.setState({posts: res}));
        //
    }

    handleChange(new_postId) {
        // this.userService.user_join_post_service(1, this.state.posts[index].id).then(() => this.componentDidMount());
        this.setState({postId:new_postId});
        this.setState({click: true});
        window.scrollTo(0,0);

    }


    render() {
        return (
            <div>
                {this.state.click ? <UpdatePostDetail postId={this.state.postId}/> : null}
                {this.state.posts.map((post, index) =>
                    <div key={index} className="card w-100">
                        <h3 className="card-header">{post.title}</h3>
                        <div className="card-body">
                            <h4 className="card-title">{"Content:"}{post.content}
                                <button className="btn btn-info float-right"
                                        onClick={() => this.handleChange(post.id)}
                                > Update
                                </button>
                            </h4>
                        </div>
                    </div>
                )
                }
            </div>)
    }

}
export default UpdatePostAdmin;