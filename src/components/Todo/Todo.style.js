import styled from 'styled-components';

const TodoFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TodoCardListContainer = styled.ul`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 500px;

  overflow-y: auto;
  background-color: ${({ theme }) => theme.COLOR.CARD_BACKGROUND};
`;

const TodoCardContainer = styled.div`
  background-color: ${({ theme }) => theme.COLOR.BACKGROUND};
  padding: 10px;
  display: flex;
  gap: 10px;
  border-radius: 30px;

  & .checkbox-container {
    display: flex;
    justify-content: center;
    align-items: center;
    & input {
      width: 35px;
      height: 20px;
      background-color: ${({ isChecked }) => (isChecked ? 'red' : null)};
    }
  }
`;

const TodoContentBoxWrapper = styled.input`
  /* height: 40px; */
  flex-grow: 1;
  font-size: 16px;
  border: none;

  text-decoration: ${({ isChecked }) => (isChecked ? 'line-through' : '')};
  color: ${({ isChecked, theme }) =>
    isChecked ? theme.COLOR.COMPLETED_TODO_FONT : ''};
`;

const TodoSelectButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const InputTodoContainer = styled.div`
  display: flex;
  padding: 10px;
  gap: 10px;
  & .todo-input-content {
    width: 420px;
    height: 35px;
  }
  & .add-icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TodoSelectButtonWrapper = styled.button`
  width: ${({ width }) => (width ? `${width}` : null)};
  height: ${({ height }) => (height ? `${height}` : null)};
  border-radius: ${({ radius }) => (radius ? `${radius}` : null)};
`;
export {
  TodoFormContainer,
  TodoCardListContainer,
  TodoCardContainer,
  TodoContentBoxWrapper,
  TodoSelectButtonContainer,
  TodoSelectButtonWrapper,
  InputTodoContainer,
};
