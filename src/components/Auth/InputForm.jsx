import { useState } from 'react';
import * as S from './Auth.style';
import InputBox from './InputBox';
import SubmitButton from './SubmitButton';
import SelectButton from './SelectButton';
import {
  checkValidationEmail,
  checkValidationPassword,
} from '../../utils/auth';
import { signIn, signUp } from '../../apis/auth';
import { useNavigate } from 'react-router-dom';
const InputForm = () => {
  const [userLoginInfo, setUserLoginInfo] = useState({});
  const [validations, setValidations] = useState({});
  const [selectedButton, setSelectedButton] = useState('로그인');
  const navigate = useNavigate();
  const buttonList = ['로그인', '회원가입'];

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

  const submitLoginInfoHandler = async (body) => {
    try {
      if (selectedButton === '로그인') {
        const res = await signIn(body);
        const accessToken = res.data.access_token;
        localStorage.setItem('accessToken', accessToken);
        alert(`로그인되었습니다`);
        navigate('/todo');
      } else if (selectedButton === '회원가입') {
        const res = await signUp(body);
        const accessToken = res.data.access_token;
        alert(`회원가입되었습니다`);
        localStorage.setItem('accessToken', accessToken);
      }
    } catch (error) {
      alert(`인증 에러 : ${error.response.data.message}`);
    }
  };

  return (
    <S.AuthContainer>
      <S.InputFormWrapper>
        <InputBox title='Email' onChange={emailCheckHandler} />
        <InputBox title='Pw' onChange={passwordCheckHandler} type='password' />
      </S.InputFormWrapper>

      <S.SelectButtonListContainer>
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
      </S.SelectButtonListContainer>

      <SubmitButton
        onClick={() => submitLoginInfoHandler(userLoginInfo)}
        title='확인'
        disabled={
          !(validations.emailValidation && validations.passwordValidation)
        }
      />
    </S.AuthContainer>
  );
};

export default InputForm;
