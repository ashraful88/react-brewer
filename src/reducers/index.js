import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import pageReducer from './pageReducer';
import commonReducer from './commonReducer';

const rootReducer = combineReducers({
  homeReducer,
  pageReducer,
  commonReducer,
});

export default rootReducer;
