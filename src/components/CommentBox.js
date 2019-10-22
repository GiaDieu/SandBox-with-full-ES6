import React from "react";
import Post from "./Post";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

class CommentBox extends React.Component {
  state = { comments: this.props.comments };

  onHandleSubmit = comment => {
    const comments = this.state.comments;
    comment.id = Date.now();
    const newComments = comments.concat([comment]);
    this.setState({
      comments: newComments
    });
  };

  render() {
    return (
      <div className="commentBox">
        <Post
          id={this.props.post.id}
          user={this.props.post.user}
          content={this.props.post.content}
        />
        {this.state.comments.map(comment => {
          return (
            <Comment
              key={comment.id}
              user={comment.user}
              content={comment.content}
            />
          );
        })}
        <CreateComment onSubmit={this.onHandleSubmit} />
      </div>
    );
  }
}

export default CommentBox;
