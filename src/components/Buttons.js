import React, { useContext } from 'react';
import { DataContext } from '../App';
import styled from 'styled-components';
import Button from './Button';

const ButtonsWrapper = styled.div`
  width: 300px;
  border: 1px solid black;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`;
const Buttons = () => {
  const { dispatch } = useContext(DataContext);
  return (
    <ButtonsWrapper>
      <Button
        onClick={() => {
          dispatch({ type: 'DISPLAY POSTS' });
        }}
      >
        Posts
      </Button>
      <Button
        onClick={() => {
          dispatch({ type: 'DISPLAY COMMENTS' });
        }}
      >
        Comments
      </Button>
      <Button onClick={() => dispatch({ type: 'DISPLAY TODOS' })}>Todos</Button>
    </ButtonsWrapper>
  );
};

export default Buttons;
