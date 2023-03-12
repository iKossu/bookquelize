import axios from 'axios';

export const apiUrlPrefix = process.env.REACT_APP_API_URL ?? 'http://localhost:3000';

const api = axios.create({
  baseURL: apiUrlPrefix,
  timeout: 20000,
});

export const postRequest = async (url, data) => {
  const response = await api.post(url, data);
  return response;
};

export const getRequest = async (url) => {
  const response = await api.get(url);
  return response;
};
