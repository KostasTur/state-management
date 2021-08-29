import React, { useContext } from 'react';
import { DataContext } from '../App';
const Posts = () => {
  const { state } = useContext(DataContext);
  //   console.log(state.posts);
  return (
    <>
      {state.posts &&
        state.posts.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
    </>
  );
};

export default Posts;
