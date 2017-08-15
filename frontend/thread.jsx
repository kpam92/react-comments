import React from 'react';

class Thread extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      commentComponent: 'no-show',
      currNewComment: ""
    }
    this.toggleComment = this.toggleComment.bind(this);
    this.addComment = this.addComment.bind(this);

  }

  updateComment() {
    return e => this.setState({currNewComment: e.target.value})
  }

  addComment(e){
    e.preventDefault();
    let newComments = this.state.comments;
    newComments.push({post: this.state.currNewComment, comments:[]})
    this.setState({comments: newComments});
    this.setState({currNewComment: ""})
    this.setState({commentComponent: 'no-show'})
  }

  renderCommentInput() {
    const { commentComponent } = this.state;
    if (commentComponent === 'no-show') {
      return;
    } else {
      return (
        <div>
          <form onSubmit={this.addComment}>
            <input
              value={this.state.currNewComment}
              onChange={this.updateComment()}
              className="input"
              placeholder="new comment"
              required/>
            <button>+</button>
          </form>
        </div>
      )
    }
  }

  toggleComment() {
    if (this.state.commentComponent === 'no-show') {
      this.setState({commentComponent: 'show'})
    } else {
      this.setState({commentComponent: 'no-show'})
    };
  }

  renderComments() {
    const { comments } = this.state;
    if (comments.length < 1) {
      return;
    }

    const content = comments.map((comment) => (
      <Thread key={window.btoa(comment.post)} post={comment.post} comments={comment.comments}/>
    ));

    return content;
  }

  render() {

    return(
      <div>
        User123
        {this.props.post}
        <button onClick={this.toggleComment}>Add comment</button>
        {this.renderCommentInput()}
        {this.renderComments()}
      </div>
    )
  }
}

export default Thread;
