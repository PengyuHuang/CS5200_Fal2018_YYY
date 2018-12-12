import React, {Component} from 'react';
import ReadReplies from './ReadReplies';
import PostServiceClient from "../../services/PostServiceClient";

class ReadPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: '',
            click: false,
            posts: [],
            view_replies:false
        };
        this.postService = PostServiceClient.instance;
        this.handleChange=this.handleChange.bind(this);
        this.read_post_jumbo=this.read_post_jumbo.bind(this);
    }

    componentDidMount() {
        this.postService.read_post_replies_service(this.props.parent_post_id).then(res => this.setState({posts: res}));
    }

    handleChange(new_index) {
        this.setState({index: new_index});
        this.setState({click: true});
       // window.scrollTo(0,200);
    }
    handelViewReplies(){
        this.setState({view_replies:!this.state.view_replies});
    }

    render() {
        return (
            <div>
                {this.state.posts.map((post, index) =>
                    <div key={index }
                         className=  {post.priority===1? "card w-100 bg-warning": "card w-100" } >
                        <h3 className= "card-header"> {post.title} </h3>
                        <div className="card-body">
                            {post.priority===1? <h4>VIP Post</h4>:null}
                            <h4 className="card-title">{"Content:"}{post.content}</h4>
                            <h4 className="card-title">{"Author:"}{post.author_name}</h4>
                        </div>
                    </div>
                )
                }
                {this.state.click ? this.read_post_jumbo(this.state.index) : null}
            </div>)
    }

    read_post_jumbo(index) {
        let replies=null;
        replies=this.state.view_replies?<ReadReplies parent_post_id={this.state.posts[index].id}/>:null;

        return (
            <div className="card w-10 bg-white" >
                <h1 >   {this.state.posts[index].title}</h1>
                <h3 className="lead">
                    <div>{"Post Id:"}{this.state.posts[index].id}</div>
                    <div>{"Content:"}{this.state.posts[index].content}</div>
                    <div>{"Game:"}{this.state.posts[index].game}</div>
                    <div>{"User Id:"}{<button >Click me for User Id </button>}</div>
                    <div>{<button
                        onClick={()=>this.handelViewReplies()}
                    >{this.state.view_replies? "Hide Replies":"See Replies:"} </button>}
                    </div>
                    {replies}
                </h3>
                <hr/>
            </div>

        )
    }


}


export default (ReadPosts);