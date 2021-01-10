import {ADD_NAME, ADD_CODE} from './actionTypes';

let nextId = 0;
let nextId2 = 0;
export const addName = (text) => ({
  type: ADD_NAME,
  id: nextId++,
  text,
});
export const addCode = (text) => ({
  type: ADD_CODE,
  id: nextId2++,
  text,
});
