import {combineReducers} from 'redux';
import emptyReducer from './empty';
import indicatorReducer from './indicator';
import indicatorTypeReducer from './indicatorType';
const rootReducer = combineReducers({
  emptyReducer,
  indicatorReducer,
  indicatorTypeReducer,
});
export default rootReducer;
