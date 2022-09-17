import {
  GET_BY_TYPE_INDICATOR_ERROR,
  GET_BY_TYPE_INDICATOR_FINISH,
  GET_BY_TYPE_INDICATOR_LOADING,
  indicatorTypeState,
} from '../../types/indicatorType';

export const getting = () => ({
  type: GET_BY_TYPE_INDICATOR_LOADING,
});
export const getFinish = (payload: indicatorTypeState) => ({
  type: GET_BY_TYPE_INDICATOR_FINISH,
  payload,
});
export const getError = () => ({
  type: GET_BY_TYPE_INDICATOR_ERROR,
});
