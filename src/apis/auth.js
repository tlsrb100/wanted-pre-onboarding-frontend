import axios from 'axios';
import { BASE_URL } from '../constants/url';

const apiClient = axios.create({
  baseURL: BASE_URL,
});

const signUp = async (body) => {
  const res = await apiClient.post('/auth/signup', body);
  return res;
};

const signIn = async (body) => {
  const res = await apiClient.post('/auth/signIn', body);
  return res;
};

export { apiClient, signIn, signUp };
