import {
  Action,
  GET_ALL_INDICATOR_ERROR,
  GET_ALL_INDICATOR_FINISH,
  GET_ALL_INDICATOR_LOADING,
  indicatorState,
} from '../../types/indicator';

const initialState: indicatorState = {
  data: [],
  loading: false,
  error: false,
};

const indicatorReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_ALL_INDICATOR_FINISH:
      return {...state, data: action.payload.data, loading: false};
    case GET_ALL_INDICATOR_LOADING:
      return {...state, loading: true, error: false};
    case GET_ALL_INDICATOR_ERROR:
      return {...state, loading: false, error: true};
    default:
      return state;
  }
};

export default indicatorReducer;
