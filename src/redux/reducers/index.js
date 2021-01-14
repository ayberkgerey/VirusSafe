import {combineReducers} from 'redux';
import devices from './devices';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  devices,
  visibilityFilter,
});
