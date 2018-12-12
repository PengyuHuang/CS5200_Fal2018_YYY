import React, {Component} from 'react';
import ReadReplies from './ReadReplies';
import PostServiceClient from "../../services/PostServiceClient";
import ReadPostAuthor from "./ReadPostAuthor";

class ReadPostsNoParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: '',
            click: false,
            posts: [],
            view_replies:false,
            view_author:false
        };
        this.postService = PostServiceClient.instance;
        this.handleChange=this.handleChange.bind(this);
        this.read_post_jumbo=this.read_post_jumbo.bind(this);
        this.handelViewReplies=this.handelViewReplies.bind(this);

    }

    componentDidMount() {
        this.postService.read_post_no_parent_service().then(res => this.setState({posts: res}));
    }

    handleChange(new_index) {
        this.setState({index: new_index});
        this.setState({click: true});
        window.scrollTo(0,160);
    }

    handelViewReplies(){
        this.setState({view_replies:!this.state.view_replies});
    }
    handelViewAuthor(){
        this.setState({view_author:!this.state.view_author});
    }

    render() {
        return (
            <div>
                {this.state.click ? this.read_post_jumbo(this.state.index) : null}
                {this.state.posts.map((post, index) =>
                    <div key={index }
                         className=  {post.priority===1? "card w-100 bg-warning": "card w-100" } >
                        <h3 className= "card-header"> {post.title} </h3>
                        <div className="card-body">
                            {post.priority===1? <h4>VIP Post</h4>:null}

                            <h4 className="card-title">{"Content:"}{post.content}
                                <button className="btn btn-info float-right"
                                        onClick={() => this.handleChange(index)}
                                > More Details
                                </button>
                            </h4>
                        </div>
                    </div>
                )
                }
            </div>)
    }

    read_post_jumbo(index) {
        console.log(this.state.posts[index]);
        let author=this.state.view_author?<ReadPostAuthor post_id={this.state.posts[index].id}/>:null;
        return (
            <div className="jumbotron bg-white">
                <h1 >   {this.state.posts[index].title}</h1>
                <h3 className="lead">
                    <div>{"Post Id:"}{this.state.posts[index].id}</div>
                    <div>{"Content:"}{this.state.posts[index].content}</div>
                    <div>{"Game:"}{this.state.posts[index].game}</div>
                    <div>{"Author:"} {this.state.posts[index].author_name} </div>

                    <div><button
                    onClick={()=>this.handelViewAuthor()}
                    >{this.state.view_author? "Hide Author Information":"See Author Information:"} </button></div>
                    <div>
                        {author}
                    </div>

                    <div>{<button className="btn btn-info w-100"
                    onClick={()=>this.handelViewReplies()}
                    >{this.state.view_replies? "Hide Replies":"See Replies:"} </button>}</div>
                    {this.state.view_replies? <ReadReplies parent_post_id={this.state.posts[index].id}/>:null}
                </h3>
                <hr/>
            </div>

        )
    }


}


export default (ReadPostsNoParent);
/*

                    <div key={index} className="card w-100">
                        <h3 className="card-header">{post.title}</h3>
                        <div className="card-body">
 */