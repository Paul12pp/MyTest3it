export type Action = {
  type: string;
  payload: indicatorState;
};
export const GET_ALL_INDICATOR_LOADING = 'GET_ALL_INDICATOR_LOADING';
export const GET_ALL_INDICATOR_FINISH = 'GET_ALL_INDICATOR_FINISH';
export const GET_ALL_INDICATOR_ERROR = 'GET_ALL_INDICATOR_ERROR';

export interface indicatorState {
  data: [string, Indicator][] | [];
  loading?: boolean;
  error?: boolean;
}
export interface indicatorApi {
  version?: string;
  autor?: string;
  fecha?: string;
  uf: Indicator | null;
  ivp: Indicator | null;
  dolar: Indicator | null;
  dolar_intercambio: Indicator | null;
  euro: Indicator | null;
  ipc: Indicator | null;
  utm: Indicator | null;
  imacec: Indicator | null;
  tpm: Indicator | null;
  libra_cobre: Indicator | null;
  tasa_desempleo: Indicator | null;
  bitcoin: Indicator | null;
}

export interface Indicator {
  codigo: string;
  nombre: string;
  unidad_medida: string;
  fecha: string;
  valor: number;
}
