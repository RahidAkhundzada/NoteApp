const LOGIN = 'LOGIN';

const initialState = {
  Login: false,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        Login: action.Login,
      };

    default:
      return state;
  }
};
