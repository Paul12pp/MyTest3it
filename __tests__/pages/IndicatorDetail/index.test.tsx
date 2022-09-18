import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import IndicatorDetail from '../../../src/pages/IndicatorDetail';
import {Provider} from 'react-redux';
import configureStore from '../../../src/redux';

jest.mock('../../../src/hooks/dispatch/useIndicatorType', () => {
  return jest.fn(() => ({
    get: jest.fn(),
    indicatorTypeData: {
      version: '1.7.0',
      autor: 'mindicador.cl',
      codigo: 'uf',
      nombre: 'Unidad de fomento (UF)',
      unidad_medida: 'Pesos',
      serie: [
        {
          fecha: '2022-09-17T03:00:00.000Z',
          valor: 34081.6,
        },
      ],
      loading: true,
      error: false,
    },
  }));
});
// jest.useFakeTimers();
describe('The IndicatorDetail page', () => {
  const createTestProps = (props: any) => ({
    navigation: {
      navigate: jest.fn(),
    },
    route: {
      params: {
        codig: 'mm',
        nombre: 'Euro',
      },
    },
    ...props,
  });
  let wrapper: any;
  let props;
  jest.useFakeTimers();
  const store = configureStore();
  beforeEach(() => {
    props = createTestProps({});
    wrapper = render(
      <Provider store={store}>
        <IndicatorDetail {...props} />
      </Provider>,
    );
  });
  it('should renders correctly IndicatorDetail', () => {
    expect(wrapper).toBeDefined();
  });
  it('should renders a loading', () => {
    wrapper.getByTestId('loading-test');
  });
  it('should renders a list', () => {
    wrapper.getByTestId('list-data');
  });
});
