import React, { useReducer, createContext, useEffect, useState } from 'react';
import axios from 'axios';

// components
import Display from './components/Display';
import CompA from './components/CompA/CompA';
import CompB from './components/CompB/CompB';
import CompC from './components/CompC';

// Context
export const DataContext = createContext();

// Global state
const initialState = {
  posts: null,
  todos: null,
  comments: null,
  display: '',
};

const reducer = (state, action) => {
  console.log('reducer ', 'action:', action, 'state:', state);
  switch (action.type) {
    case 'DISPLAY POSTS':
      return { ...state, display: 'posts' };
    case 'DISPLAY COMMENTS':
      return { ...state, display: 'comments' };
    case 'DISPLAY TODOS':
      return { ...state, display: 'todos' };
    case 'LOAD DATA':
      return { ...state, [action.key]: action.payload };

    default:
      return state;
  }
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);

  // fertch api's
  const POSTS_URI = 'https://jsonplaceholder.typicode.com/posts';
  const COMMENTS_URI = 'https://jsonplaceholder.typicode.com/comments';
  const TODOS_URI = 'https://jsonplaceholder.typicode.com/todos';

  useEffect(() => {
    const fetchData = async (uri, field) => {
      try {
        const response = await axios.get(uri);
        const data = response.data.slice(0, 3);
        dispatch({
          type: 'LOAD DATA',
          key: field,
          payload: data,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData(POSTS_URI, 'posts');
    fetchData(COMMENTS_URI, 'comments');
    fetchData(TODOS_URI, 'todos');

    setLoading(false);
  }, []);

  return (
    <>
      <DataContext.Provider value={{ state, dispatch }}>
        {loading ? (
          <p>...loading</p>
        ) : (
          <>
            <Display />
            <CompA />
            <CompB />
            <CompC />
          </>
        )}
      </DataContext.Provider>
    </>
  );
};

export default App;
