import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop',
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
