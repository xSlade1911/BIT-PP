import React, { Component } from 'react';
import CardPost from '../../components/CardPost/CardPost';
import './postsList.css';
import { getPosts } from "../../../services/postService";


class PostsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        getPosts().then(posts => this.setState({ posts: posts }))
    }


    render() {
        console.log(this.state.posts)
        return (

            <div className="container">
                <div className="row">
                    <h1 class="title">All posts</h1>
                </div>
                <div className="row">

                    <div className="postList">
                        {this.state.posts.map((post, i) =>
                            <CardPost key={i} {...post} />
                        )}
                    </div>

                </div>
            </div>
        );
    }
}

export default PostsList;