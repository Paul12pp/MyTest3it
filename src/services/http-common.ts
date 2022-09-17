import axios from 'axios';
const baseUrl = 'https://mindicador.cl';
export default axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-type': 'application/json',
  },
});
