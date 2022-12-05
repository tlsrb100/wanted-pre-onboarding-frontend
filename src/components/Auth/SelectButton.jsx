import * as S from './Auth.style';
const SelectButton = ({ onClick, isSelected, title }) => {
  return (
    <S.SelectButtonContainer
      onClick={onClick}
      value={title}
      isSelected={isSelected}
    >
      {title}
    </S.SelectButtonContainer>
  );
};

export default SelectButton;
