import React from 'react';
import Thread from './thread';

const comments = [
  {"post": 'test', comments: []},
  {"post": 'test2', comments: []}
]

const Main = () => (
  <div>
    <Thread post="Test Post" comments = comments/>
  </div>
);

export default App;
