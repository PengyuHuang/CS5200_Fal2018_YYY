import {Component} from "react";
import UserServiceClient from "../../services/UserServiceClient";
import UpdatePostDetail from "./UpdatePostDetail"
import React from "react";

class UpdatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: "",
            click: false,
            posts: [],
        };

        this.userService = UserServiceClient.instance;
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.userService.user_find_authored_posts_service(this.props.user.id).then(res => this.setState({posts: res}));
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
export default UpdatePost;