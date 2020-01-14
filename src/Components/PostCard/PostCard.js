import React, { Component } from 'react';
import EditPost from "../EditPost/EditPost";
import { connect } from 'react-redux';
import { getSession } from '../../reducks/reducers/authReducer';

class PostCard extends Component {
  constructor() {
    super();
    this.state = {
      editPost: false
    }
  }

  handleOpenEditPost = () => {
    this.setState({ editPost: true })
  }

  

  render() {
    return (
      <div>
        <ul>
          <li>Username: {this.props.username}</li>
          <li>Date: {this.props.date_published}</li>
          <li>Title: {this.props.title}</li>
          <li>Content: {this.props.content}</li>
        </ul>
        {this.props.user === this.props.user_id ?

          <div>

            {

            }
          </div>
          : null}
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.authReducer.user_id
  }
}

export default connect(mapStateToProps, { getSession })(PostCard);