import 'react-native';
import React from 'react';
const {render} = require('@testing-library/react-native');
import {SeparatorLine} from '../../../src/components/SeparatorLine';

describe('The SeparatorLine component', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = render(<SeparatorLine color={'red'} />);
  });
  it('Should render correctly', () => {
    console.log(wrapper.toJSON());
    expect(wrapper).toBeDefined();
  });
  it('Should render a color red', () => {
    const data = wrapper.toJSON();
    expect(data.props.style.borderColor).toEqual('red');
  });
});

describe('The SeparatorLine component with custom id', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = render(<SeparatorLine testID={'custom-id'} />);
  });
  it('Should render correctly', () => {
    expect(wrapper).toBeDefined();
  });
  it('Should render a test id', () => {
    wrapper.getByTestId('custom-id');
  });
});
