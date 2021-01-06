import Axios from 'axios';

const api = Axios.create({
  baseURL: 'http://172.16.0.114:5000',
});

export default api;
