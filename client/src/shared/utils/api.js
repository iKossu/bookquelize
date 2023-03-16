import axios from 'axios';

export const apiUrlPrefix = process.env.REACT_APP_API_URL ?? 'http://localhost:5000';

const api = axios.create({
  baseURL: apiUrlPrefix,
  timeout: 20000,
});

export const postRequest = async (url, values) => {
  const { data } = await api.post(url, values);
  return data;
};

export const getRequest = async (url) => {
  const { data } = await api.get(url);
  return data;
};
