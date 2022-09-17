import {
  GET_ALL_INDICATOR_ERROR,
  GET_ALL_INDICATOR_FINISH,
  GET_ALL_INDICATOR_LOADING,
  indicatorState,
} from '../../types/indicator';

export const gettingAll = () => ({
  type: GET_ALL_INDICATOR_LOADING,
});
export const getAll = (payload: indicatorState) => ({
  type: GET_ALL_INDICATOR_FINISH,
  payload,
});
export const getAllError = () => ({
  type: GET_ALL_INDICATOR_ERROR,
});
