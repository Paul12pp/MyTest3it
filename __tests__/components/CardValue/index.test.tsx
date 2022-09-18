import 'react-native';
import React from 'react';
const {render} = require('@testing-library/react-native');
import CardValue from '../../../src/components/CardValue';
import moment from 'moment';

const item = {
  fecha: '2022-09-17T03:00:00.000Z',
  valor: 200,
};

describe('The CardValue component', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = render(<CardValue item={item} />);
  });
  it('Should render correctly', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should render a date', () => {
    wrapper.getByText(moment(item.fecha).format('YYYY-MM-DD'));
  });
  it('Should render a value', () => {
    wrapper.getByText(`$ ${item.valor}`);
  });
});
