import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop',
});

const signUp = async (body) => {
  const res = await apiClient.post('/auth/signup', body);
  console.log(res);
};

const signIn = async (body) => {
  const res = await apiClient.post('/auth/signIn', body);
  console.log(res);
};

export { signIn, signUp };
