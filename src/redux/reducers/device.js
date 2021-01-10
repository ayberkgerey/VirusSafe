const devices = (state = [], action) => {
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

export default devices;
