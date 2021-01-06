import Axios from 'axios';

const api = Axios.create({
  baseURL: 'http://172.16.0.114:3333',
});

export default api;
