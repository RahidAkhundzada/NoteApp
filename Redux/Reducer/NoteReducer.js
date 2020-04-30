const NOTE1 = 'NOTE1';
const NOTE2 = 'NOTE2';
const NOTE3 = 'NOTE3';
const NOTE4 = 'NOTE4';
const NOTE5 = 'NOTE5';

const initialState = {
  notes: '',
  title: '',
  note: '',
  timeDay: '',
  time: '',
};

export const NoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NOTE1':
      console.log(action.notes);
      return {
        ...state,
        notes: [
          {A: action.title, B: action.note, C: action.timeDay, D: action.time},
          ...state.notes,
        ],
      };
    case NOTE2:
      return {
        ...state,
        title: action.title,
      };
    case NOTE3:
      return {
        ...state,
        note: action.note,
      };
    case NOTE4:
      return {
        ...state,
        timeDay: action.timeDay,
      };
    case NOTE5:
      return {
        ...state,
        time: action.time,
      };

    default:
      return state;
  }
};
