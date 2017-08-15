import React from 'react';
import Thread from './thread';

const comments = [
  {"post": 'test', comments: []},
  {"post": 'test2', comments: []}
]

const post = "I'm glad they never gave Rick the ability to roll himself, since that wouldn't be possible for a living pickle without appendages. It would have made the episode much less clever if he could simply roll out of the sun or roll towards the roach."

const Main = () => (
  <div className="container main">
    <Thread post={post} comments={comments}/>
  </div>
);

export default Main;
