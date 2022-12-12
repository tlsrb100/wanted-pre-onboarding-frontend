import styled from 'styled-components';

const TodoFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding: 15px 0;
  background-color: ${({ theme }) => theme.COLOR.TODO_FORM_BACKGROUND};
`;

const TodoCardListContainer = styled.ul`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TodoCardContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.COLOR.CARD_BORDER};
  background-color: ${({ theme }) => theme.COLOR.CARD_BACKGROUND};
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
  flex-grow: 1;
  font-size: 16px;
  border: none;

  text-decoration: ${({ isChecked }) => (isChecked ? 'line-through' : '')};
  color: ${({ isChecked, theme }) =>
    isChecked ? theme.COLOR.COMPLETED_TODO_FONT : ''};
  background-color: white;
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
    height: 50px;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    background-color: ${({ theme }) => theme.COLOR.INPUT_BOX_BACKGROUND};
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
