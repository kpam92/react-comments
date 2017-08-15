import React from 'react';
import Thread from './thread';

const comments = [
  {"post": 'I just realised he was able to control the roaches because brine contains sodium, which is part of what creates nerve impulses. Pretty clever.', comments: []},
  {"post": "It's hardly worth deconstructing the science of this episode, and I doubt they thought that far into it, even. His tongue wasn't even pickle.", comments: []}
]

const post = "I'm glad they never gave Rick the ability to roll himself, since that wouldn't be possible for a living pickle without appendages. It would have made the episode much less clever if he could simply roll out of the sun or roll towards the roach. This was a great episode."

const Main = () => (
  <div className="container main">
    <Thread post={post} comments={comments}/>
  </div>
);

export default Main;
