export const reducer = (state, action) => {
  console.log('reducer ', 'action:', action, 'state:', state);
  switch (action.type) {
    case 'DISPLAY POSTS':
      return { ...state, display: 'posts' };
    case 'DISPLAY COMMENTS':
      return { ...state, display: 'comments' };
    case 'DISPLAY TODOS':
      return { ...state, display: 'todos' };
    case 'LOAD DATA':
      return { ...state, [action.field]: action.payload };

    default:
      return console.log('default');
  }
};
