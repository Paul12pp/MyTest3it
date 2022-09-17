import {useDispatch, useSelector} from 'react-redux';
import {getAllError, gettingAll, getAll} from '../../redux/actions/indicator';
import {indicatorState} from '../../redux/types/indicator';
import IndicatorService from '../../services/Indicator';
import {configIndicator} from '../../utils/indicator';

export const useIndicator = () => {
  const dispatch = useDispatch();
  const indicatorData: indicatorState = useSelector(
    (state: any) => state.indicatorReducer,
  );
  return {
    indicatorData,
    getAll: async () => {
      dispatch(gettingAll());
      await IndicatorService.getAll()
        .then(result => {
          if (result.status === 200) {
            const temp = configIndicator(result.data);
            dispatch(getAll({data: temp}));
          } else {
            dispatch(getAllError());
          }
        })
        .catch(() => dispatch(getAllError()));
    },
  };
};
export default useIndicator;
