import {ADD_DEVICE, TOGGLE_DEVICE} from './actionTypes';

let nextId = 0;
export const addDevice = (name, code) => ({
  type: ADD_DEVICE,
  id: nextId++,
  name,
  code,
});

export const toggleDevice = (id) => ({
  type: TOGGLE_DEVICE,
  id,
});
