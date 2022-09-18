import 'react-native';
import React from 'react';
const {render, fireEvent, act} = require('@testing-library/react-native');
import CardIndicator from '../../../src/components/CardIndicator';
import {Indicator} from '../../../src/redux/types/indicator';

const data = {
  onPress: jest.fn(),
  onPressInfo: jest.fn(),
};
const item: [string, Indicator] = [
  'bitcoin',
  {
    codigo: 'bitcoin',
    fecha: '2022-09-15T03:00:00.000Z',
    nombre: 'Bitcoin',
    unidad_medida: 'Dólar',
    valor: 19694.69,
  },
];

describe('The CardIndicator component', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = render(
      <CardIndicator
        item={item}
        onPress={data.onPress}
        onPressInfo={data.onPressInfo}
      />,
    );
  });
  it('Should render correctly', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should render a name', () => {
    wrapper.getByText(item[1].nombre);
  });
  it('Should render a unidad_medida', () => {
    wrapper.getByText(item[1].unidad_medida);
  });
  it('Should fire a onPress', async () => {
    const card = wrapper.getByTestId('card-test');
    await act(async () => {
      fireEvent.press(card);
    });
  });
  it('Should fire a onPressInfo', async () => {
    const icon = wrapper.getByTestId('info-icon');
    await act(async () => {
      fireEvent.press(icon);
    });
  });
  it('Should rendre an arrow icon', async () => {
    wrapper.getByTestId('arrow-icon');
  });
  it('Should rendre a separator line', async () => {
    wrapper.getByTestId('separator-line');
  });
});
