import * as S from './Todo.style';

const TodoSelectButton = ({ title, onClick = null, isSelected }) => {
  return (
    <S.TodoSelectButtonWrapper value={title} onClick={onClick}>
      {title}
    </S.TodoSelectButtonWrapper>
  );
};

export default TodoSelectButton;
