import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../reducks/reducers/postsReducer';
import { getSession } from '../../reducks/reducers/authReducer';
import { withRouter } from "react-router-dom";

class AddPost extends Component {
  constructor() {
    super();
    this.state = {
      category_name: "",
      title: "",
      content: ""
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAddPost = () => {
    const { category_name, title, content } = this.state;

    const { addPost } = this.props;

    addPost({ category_name, title, content })
    this.props.history.push("/home")
  }

  render() {
    return (
      <div>
        <h1>Add a DevNote</h1>
        <input name="category_name" placeholder="Category" value={this.state.category_name} onChange={this.handleChange} />
        <input name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
        <input name="content" placeholder="Coding is cool..." value={this.state.content} onChange={this.handleChange} />
        <button onClick={this.handleAddPost}>Add a DevNote</button>
      </div>
    )
  }
}
const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.authReducer.user_id
  }
}
export default withRouter(connect(mapStateToProps, {
  addPost,
  getSession
})(AddPost));