import {combineReducers} from 'redux';

const nameReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NAME':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    default:
      return state;
  }
};

const codeReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CODE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    default:
      return state;
  }
};

export const reducers = combineReducers({nameReducer, codeReducer});
