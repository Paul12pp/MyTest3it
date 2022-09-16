import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import Home from '../../../src/pages/Home';

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
    props = createTestProps({});
    wrapper = render(<Home {...props} />);
  });
  it('should renders correctly Home', () => {
    expect(wrapper).toBeDefined();
  });
});
