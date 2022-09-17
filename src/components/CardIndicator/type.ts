import {Indicator} from '../../redux/types/indicator';

export interface CardIndicatorProps {
  item: [string, Indicator];
  onPress: () => void;
  onPressInfo: () => void;
}
