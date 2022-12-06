import { useState } from 'react';
import * as S from './Auth.style';
import InputBox from './InputBox';
import SubmitButton from './SubmitButton';
import SelectButton from './SelectButton';
import {
  checkValidationEmail,
  checkValidationPassword,
} from '../../utils/auth';
import { signIn } from '../../apis/auth';
const InputForm = () => {
  const [userLoginInfo, setUserLoginInfo] = useState({});
  const [validations, setValidations] = useState({});
  const [selectedButton, setSelectedButton] = useState('로그인');
  const buttonList = ['로그인', '회원가입'];
  console.log(userLoginInfo);
  const buttonClickHandler = (e) => {
    setSelectedButton(e.target.value);
  };

  const emailCheckHandler = (e) => {
    setUserLoginInfo({ ...userLoginInfo, email: e.target.value });
    const emailValidation = checkValidationEmail(e.target.value);
    setValidations({ ...validations, emailValidation });
  };

  const passwordCheckHandler = (e) => {
    setUserLoginInfo({ ...userLoginInfo, password: e.target.value });
    const passwordValidation = checkValidationPassword(e.target.value);
    setValidations({ ...validations, passwordValidation });
  };

  const submitLoginInfoHandler = (body) => {
    signIn(body);
  };

  return (
    <>
      <S.InputFormWrapper>
        <InputBox title='email' onChange={emailCheckHandler} />
        <InputBox title='pw' onChange={passwordCheckHandler} />
      </S.InputFormWrapper>

      {buttonList.map((buttonTitle, idx) => {
        return (
          <SelectButton
            key={idx}
            isSelected={selectedButton === buttonTitle ? true : false}
            onClick={buttonClickHandler}
            title={buttonTitle}
            disabled={false}
          />
        );
      })}

      <SubmitButton
        onClick={() => submitLoginInfoHandler(userLoginInfo)}
        title='제출'
        disabled={
          !(validations.emailValidation && validations.passwordValidation)
        }
      />
    </>
  );
};

export default InputForm;
