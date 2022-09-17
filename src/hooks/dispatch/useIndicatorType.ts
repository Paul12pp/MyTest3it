import {useDispatch, useSelector} from 'react-redux';
import {getError, getFinish, getting} from '../../redux/actions/indicatorType';
import {indicatorTypeState} from '../../redux/types/indicatorType';
import IndicatorService from '../../services/Indicator';

export const useIndicatorType = () => {
  const dispatch = useDispatch();
  const indicatorTypeData: indicatorTypeState = useSelector(
    (state: any) => state.indicatorTypeReducer,
  );
  return {
    indicatorTypeData,
    get: async (codigo: string) => {
      dispatch(getting());
      await IndicatorService.get(codigo)
        .then(result => {
          if (result.status === 200) {
            dispatch(getFinish(result.data));
          } else {
            dispatch(getError());
          }
        })
        .catch(() => dispatch(getError()));
    },
  };
};
export default useIndicatorType;
