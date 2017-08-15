import React from 'react';

class Thread extends React.Component {

  constructor(props) {
    super(props)
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

  render() {
    return(
      <div>
        User123
        {this.props.post}
        <button>Add comment</button>
        <input></input>
        {this.renderComments()}
      </div>
    )
  }
}

export default Thread;
