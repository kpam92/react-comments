import React from 'react';

class Thread extends React.Component {

  constructor(props) {
    super(props);
    this.state = {commentComponent: 'no-show'}
    this.toggleComment = this.toggleComment.bind(this);

  }

  addComment(){

  }
  renderComments() {
    const { comments } = this.props;
    if (comments.length < 1) {
      return;
    }

    const content = comments.map((comment) => (
      <Thread key={window.btoa(comment.post)} post={comment.post} comments={comment.comments}/>
    ));

    return content;
  }

  renderCommentInput() {
    const { commentComponent } = this.state;
    if (commentComponent === 'no-show') {
      return;
    } else {
      return (
        <div>
          <input></input>
          <button>+</button>
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
