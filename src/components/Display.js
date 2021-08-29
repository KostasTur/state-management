import React, { useContext } from 'react';
import { DataContext } from '../App';
import Comments from './Comments';
import Posts from './Posts';
import Todos from './Todos';

const Display = () => {
  const { state } = useContext(DataContext);
  console.log('Display', state);
  switch (state.display) {
    case 'todos':
      return (
        <div>
          <h2>Todos</h2>
          <Todos />
        </div>
      );
    case 'posts':
      return (
        <div>
          <h2>Posts</h2>
          <Posts />
        </div>
      );
    case 'comments':
      return (
        <div>
          <h2>Comments</h2>
          <Comments />
        </div>
      );
    default:
      return (
        <div>
          <h2>Click a button to display</h2>
        </div>
      );
  }
};

export default Display;
