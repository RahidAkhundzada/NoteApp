const AUTH = 'AUTH';

const initialState = {
  Login: false,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        Login: action.Login,
      };

    default:
      return state;
  }
};
