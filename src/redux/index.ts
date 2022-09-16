import {legacy_createStore} from 'redux';
import reducers from './reducers';
const configureStore = () => {
  return legacy_createStore(reducers);
};
export default configureStore;
