import * as S from './Auth.style';
const SubmitButton = ({ onClick, title, disabled = false }) => {
  return (
    <S.SubmitButtonContainer onClick={onClick} disabled={disabled}>
      {title}
    </S.SubmitButtonContainer>
  );
};

export default SubmitButton;
