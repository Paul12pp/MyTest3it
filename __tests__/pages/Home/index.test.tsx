import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import Home from '../../../src/pages/Home';
import configureStore from '../../../src/redux';
import {Provider} from 'react-redux';
jest.mock('../../../src/hooks/dispatch/useIndicator', () => {
  return jest.fn(() => ({
    getAll: jest.fn(),
    indicatorData: {
      data: [],
      loading: false,
      error: false,
    },
  }));
});
jest.useFakeTimers();
describe('The Home page', () => {
  const createTestProps = (props: any) => ({
    navigation: {
      navigate: jest.fn(),
    },
    route: {
      params: {},
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
        <Home {...props} />
      </Provider>,
    );
  });
  it('should renders correctly Home', () => {
    expect(wrapper).toBeDefined();
  });
  it('should renders a loading', () => {
    wrapper.getByTestId('loading-test');
  });
});
