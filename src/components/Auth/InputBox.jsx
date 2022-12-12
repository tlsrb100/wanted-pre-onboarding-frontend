import * as S from './Auth.style';
const InputBox = ({ title = 'default', onChange = null, type = null }) => {
  return (
    <S.InputBoxContainer>
      <label htmlFor={title}>{title}</label>
      <input onChange={onChange} id={title} type={type} />
    </S.InputBoxContainer>
  );
};

export default InputBox;
