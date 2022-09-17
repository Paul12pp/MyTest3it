import {
  Action,
  GET_BY_TYPE_INDICATOR_ERROR,
  GET_BY_TYPE_INDICATOR_LOADING,
  GET_BY_TYPE_INDICATOR_FINISH,
  indicatorTypeState,
} from '../../types/indicatorType';

const initialState: indicatorTypeState = {
  version: '',
  autor: '',
  codigo: '',
  nombre: '',
  unidad_medida: '',
  serie: [],
  loading: false,
  error: false,
};

const indicatorTypeReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_BY_TYPE_INDICATOR_FINISH:
      return {...state, ...action.payload, loading: false};
    case GET_BY_TYPE_INDICATOR_LOADING:
      return {...state, loading: true, error: false};
    case GET_BY_TYPE_INDICATOR_ERROR:
      return {...state, loading: false, error: true};
    default:
      return state;
  }
};

export default indicatorTypeReducer;
