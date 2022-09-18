import 'react-native';
import React from 'react';
const {render, fireEvent, act} = require('@testing-library/react-native');
import AppbarHeader from '../../../src/components/AppbarHeader';

describe('The AppbarHeader component', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = render(<AppbarHeader title={'hola'} />);
  });
  it('Should render correctly', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should render an icon', () => {
    wrapper.getByTestId('icon-id');
  });

  it('Should render a content id', () => {
    wrapper.getByTestId('content-id');
  });
  it('Should fire a btn onbackpress', async () => {
    const icon = wrapper.getByTestId('icon-id');
    await act(async () => {
      fireEvent.press(icon);
    });
  });
});
