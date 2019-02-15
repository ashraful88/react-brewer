import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function pageReducer(state = initialState.home, action) {
  let newState;

  switch (action.type) {
    case OPEN_HOME_PAGE:
      return objectAssign({}, state, {dateModified: action.dateModified});
    case SOMETHING_HOME_PAGE:
      return objectAssign({}, state, {dateModified: action.dateModified});
    default:
      return state;
  }
}
