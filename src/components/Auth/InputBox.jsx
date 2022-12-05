import * as S from './Auth.style';
const InputBox = ({ title = 'default', onChange = null }) => {
  return (
    <S.InputBoxContainer>
      <label htmlFor={title}>{title}</label>
      <input onChange={onChange} id={title} />
    </S.InputBoxContainer>
  );
};

export default InputBox;
