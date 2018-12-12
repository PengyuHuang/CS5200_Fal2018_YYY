import React, {Component} from 'react';

import CreatePost from "./CreatePost";
import ReadPosts from "./ReadPostsNoParent";
import UpdatePost from "./UpdatePost";
import DeletePost from "./DeletePost";
import ReplyPost from "./UpdateReplyPost";

import UpdatePostAdmin from "./UpdatePostAdmin";
import DeletePostAdmin from "./DeletePostAdmin";


class PostManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            which: 'Read All Posts'
        };
    }


    render() {
        let component = null;
        switch (this.state.which) {
            case "Create A Post":
                component = <CreatePost user={this.props.user}/>;
                break;
            case "Update A Post":
                component = this.props.user.type==="admin"? <UpdatePostAdmin user={this.props.user}/>:
                    <UpdatePost user={this.props.user}/>;
                break;
            case "Reply A Post":
                component = <ReplyPost user={this.props.user}/>;
                break;
            case "Delete A Post":
                component = this.props.user.type==="admin"? <DeletePostAdmin user={this.props.user}/>:
                    <DeletePost user={this.props.user}/>;
                break;
            case "Read All Posts":
                component = <ReadPosts/>;
                break;
            default:
                component = <ReadPosts/>;
        }
        let return_by_type = null;
        switch (this.props.user.type) {
            case "anonymous":
                return_by_type = this.anonymous_return();
                break;
            default:
                return_by_type = this.except_anonymous_return();
        }


        return (
            <div>
                <div className="jumbotron jumbotron-fluid bg-white">
                    <h1>Posts! Make a discussion for a game.</h1>
                    <h1>Everyone can make a post here, VIP student's posts will be high-lighted!</h1>
                </div>
                {return_by_type}
                <h1><strong>{this.state.which}</strong></h1>
                <hr/>
                {component}
            </div>
        )

    }

    except_anonymous_return() {
        return (
            <div className="btn-group d-flex" role="group">
                <button className="btn btn-info w-100"
                        onClick={() => this.setState({which: "Read All Posts"})}>Read All Posts
                </button>

                <button className="btn btn-info w-100"
                        onClick={() => this.setState({which: "Create A Post"})}>Create A Post
                </button>

                <button className="btn btn-info w-100"
                        onClick={() => this.setState({which: "Reply A Post"})}>Reply A Post
                </button>

                <button className="btn btn-info w-100"
                        onClick={() => this.setState({which: "Update A Post"})}>Update A Post
                </button>

                <button className="btn btn-info w-100"
                        onClick={() => this.setState({which: "Delete A Post"})}>Delete A Post
                </button>
            </div>
        )

    }

    anonymous_return() {
        return (
            <div>
                <div className="btn-group d-flex" role="group">
                    <button className="btn btn-info w-100"
                            onClick={() => this.setState({which: "Read All Posts"})}>Read All Posts
                    </button>
                </div>
                <hr/>
                <h3><strong>Log in to creat your own posts!</strong></h3>
                <hr/>
            </div>

        )


    }

}


export default PostManager;