const AUTH = 'AUTH';

const initialState = {
  login: true,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        login: action.login,
      };

    default:
      return state;
  }
};
