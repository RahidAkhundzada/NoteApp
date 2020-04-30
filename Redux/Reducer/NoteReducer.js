const NOTE1 = 'NOTE1';
const NOTE2 = 'NOTE2';

const initialState = {
  notes: [],
};
export const NoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTE1:
      return {
        ...state,
        notes: action.note,
      };

    default:
      return state;
  }
};
