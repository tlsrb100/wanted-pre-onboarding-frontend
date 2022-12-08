import styled from 'styled-components';
import TodoSelectButton from './TodoSelectButton';

const TodoFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TodoCardListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 500px;
  overflow-y: auto;
`;

const TodoCardContainer = styled.div`
  padding: 10px;
  /* width: 500px; */
  display: flex;
  gap: 10px;
  border: 2px solid red;
  & input {
    width: 35px;
    height: 50px;
  }
`;

const TodoContentBoxWrapper = styled.textarea`
  height: 50px;
  flex-grow: 1;
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
