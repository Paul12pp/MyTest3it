import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import Indicator from '../../../src/pages/Indicator';
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
describe('The Indicator page', () => {
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

  beforeEach(() => {
    const store = configureStore();
    props = createTestProps({});
    wrapper = render(
      <Provider store={store}>
        <Indicator {...props} />
      </Provider>,
    );
  });
  it('should renders correctly Indicator', () => {
    expect(wrapper).toBeDefined();
  });
  it('should renders a loading', () => {
    wrapper.getByTestId('loading-test');
  });
  it('should renders a list', () => {
    wrapper.getByTestId('list-data');
  });
});
