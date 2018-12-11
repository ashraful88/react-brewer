import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import aboutReducer from './aboutReducer';
import commonReducer from './commonReducer';

const rootReducer = combineReducers({
  homeReducer,
  aboutReducer,
  commonReducer,
});

export default rootReducer;
