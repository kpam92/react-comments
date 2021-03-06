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
        <div className="col-md-12">
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
      <div className='col-md-12 '>
        <div className="row comment-box">
          <div className="col-md-12 username padding-bottom">
            <div className="avatar"/>
            <span>User123</span>
          </div>
          <div className="col-md-12 padding-bottom">
            {this.props.post}
          </div>
          <div className="col-md-12 add-comment padding-bottom">
            <button onClick={this.toggleComment}>Add comment</button>
          </div>
          {this.renderCommentInput()}
        </div>
        <div className="col-md-2"/>
        <div className="col-md-10 thread">
          <div className="row">
            {this.renderComments()}
          </div>
        </div>
      </div>
    )
  }
}

export default Thread;
