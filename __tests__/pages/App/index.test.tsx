/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../../../src/pages/App';

// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';

describe('The Home page', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = render(<App />);
  });
  it('should renders correctly App', () => {
    expect(wrapper).toBeDefined();
  });
});
