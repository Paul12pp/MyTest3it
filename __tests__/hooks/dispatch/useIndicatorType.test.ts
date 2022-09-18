import configureStore from '../../../src/redux';
import {
  getting,
  getError,
  getFinish,
} from '../../../src/redux/actions/indicatorType';
import indicatorReducerType from '../../../src/redux/reducers/indicatorType';
import {
  GET_BY_TYPE_INDICATOR_ERROR,
  GET_BY_TYPE_INDICATOR_FINISH,
  GET_BY_TYPE_INDICATOR_LOADING,
  indicatorTypeState,
  Serie,
} from '../../../src/redux/types/indicatorType';

describe('useIndicatorType hook', () => {
  it('Should return a call gettingAll', async () => {
    const store = configureStore();
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
    const state = {...initialState};
    const expectedAction = {
      type: GET_BY_TYPE_INDICATOR_LOADING,
      payload: {...initialState, loading: true},
    };
    store.dispatch(getting());
    expect(indicatorReducerType(state, expectedAction)).toEqual({
      ...state,
      loading: true,
    });
  });
  it('Should return a call getAllError', async () => {
    const store = configureStore();
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
    const state = {...initialState};
    const expectedAction = {
      type: GET_BY_TYPE_INDICATOR_ERROR,
      payload: {...initialState, error: true, loading: false},
    };
    store.dispatch(getError());
    expect(indicatorReducerType(state, expectedAction)).toEqual({
      ...state,
      loading: false,
      error: true,
    });
  });
  it('Should return a call getAll', async () => {
    const store = configureStore();
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
    const state = {...initialState};
    const serie: Serie = {fecha: '2022-09-15T03:00:00.000Z', valor: 200};
    const expectedAction = {
      type: GET_BY_TYPE_INDICATOR_FINISH,
      payload: {
        version: '',
        autor: '',
        codigo: '',
        nombre: '',
        unidad_medida: '',
        serie: [serie],
        error: false,
        loading: false,
      },
    };
    store.dispatch(
      getFinish({
        version: '',
        autor: '',
        codigo: '',
        nombre: '',
        unidad_medida: '',
        serie: [serie],
      }),
    );
    expect(indicatorReducerType(state, expectedAction)).toEqual({
      version: '',
      autor: '',
      codigo: '',
      nombre: '',
      unidad_medida: '',
      serie: [serie],
      error: false,
      loading: false,
    });
  });
});
