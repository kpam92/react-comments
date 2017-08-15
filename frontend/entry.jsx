import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';

document.addEventListener('DOMContentLoaded',() => {
  const root = document.getElementById('content');
  ReactDOM.render(<Main/>,root)
})
