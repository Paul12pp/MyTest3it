export type Action = {
  type: string;
  payload: indicatorTypeState;
};
export const GET_BY_TYPE_INDICATOR_LOADING = 'GET_BY_TYPE_INDICATOR_LOADING';
export const GET_BY_TYPE_INDICATOR_FINISH = 'GET_BY_TYPE_INDICATOR_FINISH';
export const GET_BY_TYPE_INDICATOR_ERROR = 'GET_BY_TYPE_INDICATOR_ERROR';

export interface indicatorTypeState {
  version: string;
  autor: string;
  codigo: string;
  nombre: string;
  unidad_medida: string;
  serie: Serie[] | [];
  loading?: boolean;
  error?: boolean;
}

export interface Serie {
  fecha: string;
  valor: number;
}
