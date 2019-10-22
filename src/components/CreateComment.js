import React from "react";

class CreateComment extends React.Component {
  state = { content: "", user: "" };

  handleUserChange = event => {
    this.setState({ user: event.target.value });
  };

  handleTextChange = event => {
    this.setState({ content: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      user: this.state.user,
      content: this.state.content
    });
  };

  render() {
    return (
      <form className="createComment" onSubmit={this.handleSubmit}>
        <input
          value={this.state.user}
          type="text"
          placeholder="pls enter your name"
          onChange={this.handleUserChange}
        />
        <input
          value={this.state.content}
          type="text"
          placeholder="Thoughts?"
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
        <div style={{ marginBottom: "50px" }}></div>
      </form>
    );
  }
}

export default CreateComment;
