const init = {
  username: '',
};

export default (state = init, action) => {
  switch (action.type) {
    case 'LOGIN':
      break;
    case 'LOGOUT':
      break;

    default:
      return state;
  }
};
