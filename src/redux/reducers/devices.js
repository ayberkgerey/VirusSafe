let nextId = 0;
const devices = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DEVICE':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          code: action.code,
          completed: false,
        },
      ];

    case 'TOGGLE_DEVICE':
      return state.map((device) =>
        device.id === action.id
          ? {...device, completed: !device.completed}
          : device,
      );
    default:
      return state;
  }
};

export default devices;
