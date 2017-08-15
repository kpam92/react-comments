import React from 'react';

class Thread extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        {this.props.post}
      </div>
    )
  }
}

export default Thread;
