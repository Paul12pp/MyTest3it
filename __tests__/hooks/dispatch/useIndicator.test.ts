import configureStore from '../../../src/redux';
import {
  getAll,
  getAllError,
  gettingAll,
} from '../../../src/redux/actions/indicator';
import indicatorReducer from '../../../src/redux/reducers/indicator';
import {
  GET_ALL_INDICATOR_ERROR,
  GET_ALL_INDICATOR_FINISH,
  GET_ALL_INDICATOR_LOADING,
  Indicator,
  indicatorState,
} from '../../../src/redux/types/indicator';

describe('useIndicator hook', () => {
  it('Should return a call gettingAll', async () => {
    const store = configureStore();
    const initialState: indicatorState = {
      data: [],
      loading: false,
      error: false,
    };
    const state = {...initialState};
    const expectedAction = {
      type: GET_ALL_INDICATOR_LOADING,
      payload: {...initialState, loading: true},
    };
    store.dispatch(gettingAll());
    expect(indicatorReducer(state, expectedAction)).toEqual({
      ...state,
      loading: true,
    });
  });
  it('Should return a call getAllError', async () => {
    const store = configureStore();
    const initialState: indicatorState = {
      data: [],
      loading: false,
      error: false,
    };
    const state = {...initialState};
    const expectedAction = {
      type: GET_ALL_INDICATOR_ERROR,
      payload: {...initialState, error: true, loading: false},
    };
    store.dispatch(getAllError());
    expect(indicatorReducer(state, expectedAction)).toEqual({
      ...state,
      loading: false,
      error: true,
    });
  });
  it('Should return a call getAll', async () => {
    const store = configureStore();
    const initialState: indicatorState = {
      data: [],
      loading: false,
      error: false,
    };
    const state = {...initialState};
    const data: [string, Indicator] = [
      'prueba',
      {
        codigo: '',
        nombre: '',
        unidad_medida: '',
        fecha: '',
        valor: 20,
      },
    ];
    const expectedAction = {
      type: GET_ALL_INDICATOR_FINISH,
      payload: {
        data: [data],
        error: false,
        loading: false,
      },
    };
    store.dispatch(
      getAll({
        data: [data],
      }),
    );
    expect(indicatorReducer(state, expectedAction)).toEqual({
      data: [data],
      loading: false,
      error: false,
    });
  });
});
