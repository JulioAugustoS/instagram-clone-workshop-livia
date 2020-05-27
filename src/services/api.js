import axios from 'axios';
import {getStorage} from './storage';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(
  async (config) => {
    const token = await getStorage('token');

    config.headers.Authorization = token ? `Bearer ${token}` : undefined;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default api;
