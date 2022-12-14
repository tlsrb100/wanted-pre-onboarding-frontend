import * as S from './Todo.style';

const TodoSelectButton = ({
  children,
  title,
  onClick = null,
  width,
  height,
  radius,
}) => {
  return (
    <S.TodoSelectButtonWrapper
      value={title}
      onClick={onClick}
      width={width}
      height={height}
      radius={radius}
    >
      {children}
    </S.TodoSelectButtonWrapper>
  );
};

export default TodoSelectButton;
