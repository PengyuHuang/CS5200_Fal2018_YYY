import React, {Component} from 'react';


import PostServiceClient from "../../services/PostServiceClient";


class UpdatePostDetail extends Component {
    constructor(props) {
        super(props);
        this.postService = PostServiceClient.instance;
        this.update_post_service=this.update_post_service.bind(this);
    }


    update_post_service(post) {
        this.postService.update_post_service(post);
        alert('Update Successfully');
    }

    render() {
        let id = this.props.postId;
        let title = "";
        let content = "";
        let game="";
        let post = {
            id: id,
            title: title,
            content: content,
            game:game
        };
        return (
                <div>
                    <div className="form-group">
                        <label>New Title</label>
                        <input type="text" className="form-control"
                               onChange={event => post.title = event.target.value}/>
                    </div>
                    <div className="form-group">
                        <label>New Content</label>
                        <input type="text" className="form-control"
                               onChange={event => post.content = event.target.value}/>
                    </div>

                    <div className="form-group">
                        <label>New Game About</label>
                        <input type="text" className="form-control"
                               onChange={event => post.game = event.target.value}/>
                    </div>

                    <div>
                        <button className="btn btn-info input-group-text" id="inputGroup-sizing-lg"
                                onClick={() => this.update_post_service(post)}> Update
                        </button>
                    </div>
                </div>

        )
    }

}

export default (UpdatePostDetail);