import axios from 'axios';
import Cookie from 'js-cookie';
import configs from '~/configs';

const axiosInstance = axios.create({
  baseURL: configs.env.API_DOMAIN,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'access-control-allow-origin': '*',
  },
});

axiosInstance.interceptors.request.use(
  async (config: any) => {
    config.headers.Authorization = `Bearer ${Cookie.get('token')}`;
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      return window.location.replace(window.location.origin);
    }
    return Promise.reject(error);
  },
);

export const sendGet = (url: string, params?: any) =>
  axiosInstance.get(url, { params }).then((res) => res.data);
export const sendPost = (url: string, params?: any, queryParams?: any) =>
  axiosInstance.post(url, params, { params: queryParams }).then((res) => res.data);
export const sendPut = (url: string, params?: any) =>
  axiosInstance.put(url, params).then((res) => res.data);
export const sendPatch = (url: string, params?: any) =>
  axiosInstance.patch(url, params).then((res) => res.data);
export const sendDelete = (url: string, params?: any) =>
  axiosInstance.delete(url, { params }).then((res) => res.data);

export default axiosInstance;
