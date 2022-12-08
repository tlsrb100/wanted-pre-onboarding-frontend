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
  console.log(selectedButton);

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
    console.log('body는', body);
    if (selectedButton === '로그인') {
      const res = await signIn(body);
      const accessToken = res.data.access_token;
      localStorage.setItem('accessToken', accessToken);
      navigate('/todo');
      console.log('로그인응답은', res);
    } else if (selectedButton === '회원가입') {
      const res = await signUp(body);
      const accessToken = res.data.access_token;
      localStorage.setItem('accessToken', accessToken);
      console.log('회원가입응답은', res);
    }
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
