import http from '../http-common';

const getAll = async () => {
  const response = await http.get('/api');
  return response;
};
const get = async (tipo_indicador: string) => {
  const response = await http.get(`/api/${tipo_indicador}`);
  return response;
};

const IndicatorService = {
  getAll,
  get,
  // create,
  // update,
  // remove,
  // removeAll,
  // findByTitle
};

export default IndicatorService;
