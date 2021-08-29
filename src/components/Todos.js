import React, { useContext } from 'react';
import { DataContext } from '../App';

const Todos = () => {
  const { state } = useContext(DataContext);

  return (
    <>
      {state.todos &&
        state.todos.map((item) => (
          <ul key={item.id}>
            <li>
              <strong>{item.title}</strong>
            </li>
            <li>{item.completed ? 'completed' : 'not completed'}</li>
          </ul>
        ))}
    </>
  );
};

export default Todos;
