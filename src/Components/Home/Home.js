import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from "../../reducks/reducers/postsReducer";
import PostCard from '../PostCard/PostCard';

class Home extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    console.log(this.props.posts)
    const { posts } = this.props;
    const postsMapped = posts.map((post, i) => {
      return (
        <div key={i}>
          <PostCard user={post.user_id} username={post.username} date_published={post.date_published} title={post.title} content={post.content} />
        </div>
      )
    })
    return (
      <div>
        <h1>Home</h1>
        {postsMapped}
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return {
    posts: reduxState.postsReducer.posts
  }
}

export default connect(mapStateToProps, { getAllPosts })(Home);