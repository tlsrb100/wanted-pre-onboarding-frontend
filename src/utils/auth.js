import { apiClient } from '../apis/auth';

const checkValidationEmail = (email) => {
  const isValid = email?.includes('@');
  return isValid;
};

const checkValidationPassword = (password) => {
  const isValid = password?.length >= 8;
  console.log('passwordisValid', isValid);
  return isValid;
};

const setHeaderToken = () => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    apiClient.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${accessToken}`;
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
};

export { checkValidationEmail, checkValidationPassword, setHeaderToken };
