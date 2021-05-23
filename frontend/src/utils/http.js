import axios from 'axios';

const addDefaultHeaders = (configs) => {
  return {
    ...configs,
    headers: {
      token: localStorage.getItem('token'),
    }
  }
}

const http = {
  get: (url, configs) => axios.get(url, addDefaultHeaders(configs)),
  post: (url, data, configs) => axios.post(url, data, addDefaultHeaders(configs)),
  delete: (url, data, configs) => axios.delete(url, addDefaultHeaders({...configs, data})),
};

export default http;
