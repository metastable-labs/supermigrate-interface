import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.supermigrate.xyz/v1/',
  headers: {
    'ngrok-skip-browser-warning': true,
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // if (error?.response?.status === 401 || error?.response?.status === 403) {
    // }
    return Promise.reject(error);
  },
);

const setTokenHeader = async (token?: string) => {
  if (token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common.Authorization;
  }
};

export { axiosInstance, setTokenHeader };
