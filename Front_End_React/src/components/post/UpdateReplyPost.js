import React, {Component} from 'react';

import PostServiceClient from "../../services/PostServiceClient";
import UserServiceClient from "../../services/UserServiceClient";
class UpdateReplyPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parent_post_id: '',
            click: false,
            posts: [],
        };
        this.postService = PostServiceClient.instance;
        this.userService = UserServiceClient.instance;
        this.handleChange=this.handleChange.bind(this);

    }

    componentDidMount() {
        this.postService.read_post_no_parent_service().then(res => this.setState({posts: res}));
    }

    handleChange(parent_post_id) {
        this.setState({parent_post_id: parent_post_id});
        this.setState({click: true});
        window.scrollTo(0,200);
    }


    render() {
        return (
            <div>
                {this.state.click ? this.reply_post_detail()  : null}
                {this.state.posts.map((post, index) =>
                    <div key={index }
                         className=  {post.priority===1? "card w-100 bg-warning": "card w-100" } >
                        <h3 className= "card-header"> {post.title} </h3>
                        <div className="card-body">
                            {post.priority===1? <h4>VIP Post</h4>:null}
                            <h4 className="card-title">{"Content:"}{post.content}
                                <button className="btn btn-info float-right"
                                        onClick={() => this.handleChange(post.id)}
                                > Reply
                                </button>
                            </h4>
                        </div>
                    </div>
                )
                }
            </div>)
    }

    reply_post_service(post) {
        // this.postService.create_post_service(post);
        this.userService.user_reply_post_service(this.props.user.id,this.state.parent_post_id,post);
        alert('Reply Successfully!');
    }
    reply_post_detail () {
        let title = "";
        let content = "";
        let game ="";
        let priority= this.props.user.type==="vip_student"? 1:0;
        let post = {
            title: title,
            content: content,
            game: game,
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
                            onClick={() => this.reply_post_service(post)}> Reply
                    </button>
                </div>
            </div>

        )}





}


export default (UpdateReplyPost);