import React, { useContext } from 'react';
import { DataContext } from '../App';

const Comments = () => {
  const { state } = useContext(DataContext);

  return (
    <>
      {state.comments &&
        state.comments.map((item) => (
          <div key={item.id}>
            <h4>Title: {item.name}</h4>
            <h5>By: {item.email}</h5>
            <p>
              <strong>Comment:</strong> {item.body}
            </p>
          </div>
        ))}
    </>
  );
};

export default Comments;
