import axios from 'axios';
import store from '@/store';
import { getToken } from '@/utils/auth';

const service = axios.create({
  baseUrl: 'http://localhost:8080',
  timeout: 3000
});

service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['X-Token'] = getToken();
    }
    return config
  }
);

export default service;
