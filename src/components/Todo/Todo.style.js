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
  /* width: 500px; */
  display: flex;
  gap: 10px;
  border-radius: 45px;
  & input {
    width: 35px;
    height: 50px;
    background-color: ${({ isChecked }) => (isChecked ? 'red' : null)};
  }
`;

const TodoContentBoxWrapper = styled.textarea`
  height: 50px;
  flex-grow: 1;
  font-size: 13px;
  text-decoration: ${({ isChecked }) => (isChecked ? 'line-through' : '')};
  color: ${({ isChecked }) => (isChecked ? 'red' : '')};
  font-size: ${({ isChecked }) => (isChecked ? '13px' : '17px')};
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
  }
`;

const TodoSelectButtonWrapper = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid black;
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
