import * as S from './Auth.style';
const SubmitButton = ({ title, disabled = false }) => {
  return (
    <S.SelectButtonContainer disabled={disabled}>
      {title}
    </S.SelectButtonContainer>
  );
};

export default SubmitButton;
