const init = {
  username: '',
  token: '',
};

// ketika pertama kali jalan, maka reducer akan kosong, sehingga untuk mengatasi hal tersebut harus di taruh init di state
export default (state = init, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {username: action.payload.username, token: action.payload.token};

    case 'LOGOUT':
      return init;
    default:
      return state;
  }
};
