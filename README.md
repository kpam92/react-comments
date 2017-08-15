# React Comment Thread

[Comment Thread live][host]

[host]: https://kpam92.github.io/react-comments/


This Comment Thread is a single page React/Redux application of an example comment thread, inspired by Reddit's simple comment threads, where users can add comments to the original post, or any comment in the existing thread. This application is purely front end and added comments do not persist.

<a href="https://kpam92.github.io/react-comments/">
  <img src="https://github.com/kpam92/react-invoice/raw/master/screenshot.png"/>
</a>

## Features & Implementation

### Thread

  The entire application is built upon the `Thread` class component, which makes up the original post, and any recursively any additional comments. Each comment's `post` is rendered, then the `Thread` component maps over the comment's state, and displays each item in the `comments` array.
  ```javascript
  const exampleState = {
    post: "example post",
    comments: [
                {
                  post: 'comment1',
                  comments: []
                },
                {
                  post: 'comment1',
                  comments: []
                }
              ]
  };
  ```
### Add Comments

Each Thread's local state contains existing comments, and the add comment button allows the user to add another comment to the state's comments array.

```javascript
addComment(e){
  e.preventDefault();
  let newComments = this.state.comments;
  newComments.push({post: this.state.currNewComment, comments:[]})
  this.setState({comments: newComments});
  this.setState({currNewComment: ""})
  this.setState({commentComponent: 'no-show'})
}
```

## Future Directions for the Project

I plan to add small adjustments to the project to provide better UX for the user

### Styling

Work on SCSS to create a more unified and simplified design

### Stacking Comments

Currently, the comments and indent as they nest deeper. Future implementations will allow for large nested parts of a thread to be hidden, where the user will see calls to actions to view them, i.e. `+7 more comments`. (Similar to Reddit's design)
