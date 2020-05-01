const NOTE1 = 'NOTE1';
const NOTE2 = 'NOTE2';
const NOTE3 = 'NOTE3';
const NOTE4 = 'NOTE4';
const NOTE5 = 'NOTE5';
const NOTE6 = 'NOTE6';
const NOTE7 = 'NOTE7';
const NOTE8 = 'NOTE8';
const NOTE9 = 'NOTE9';

const initialState = {
  notes: [],
  title: '',
  note: '',
  timeDay: '',
  time: '',
  ID: '',
  text: '',
  NewData: [],
};

export const NoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NOTE1':
      return {
        ...state,
        notes: [action.notes, ...state.notes],
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
    case NOTE6:
      return {
        ...state,
        notes: action.nottes,
      };
    case NOTE7:
      return {
        ...state,
        ID: action.ID,
      };
    case NOTE8:
      return {
        ...state,
        NewData: action.NewData,
      };
    case NOTE9:
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};
