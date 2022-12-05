const checkValidationEmail = (email) => {
  const isValid = email?.includes('@');
  return isValid;
};

const checkValidationPassword = (password) => {
  const isValid = password?.length >= 8;
  console.log('passwordisValid', isValid);
  return isValid;
};

export { checkValidationEmail, checkValidationPassword };
