import {Indicator, indicatorApi} from '../../redux/types/indicator';

export const configIndicator = (data: indicatorApi): [string, Indicator][] => {
  let tempData = data;
  delete tempData.autor;
  delete tempData.version;
  delete tempData.fecha;
  const arr = Object.entries(tempData);
  return arr;
};
