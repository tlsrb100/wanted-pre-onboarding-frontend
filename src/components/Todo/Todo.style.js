import styled from 'styled-components';
import TodoSelectButton from './TodoSelectButton';

const TodoCardContainer = styled.div`
  width: 250px;
  height: 250px;
`;

const TodoContentBoxWrapper = styled.textarea`
  height: 150px;
`;
const TodoSelectButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputTodoContainer = styled.div`
  display: flex;

  & .todo-content-input {
  }
`;

const TodoSelectButtonWrapper = styled.button`
  width: 50px;
  height: 50px;
`;
export {
  TodoCardContainer,
  TodoContentBoxWrapper,
  TodoSelectButtonContainer,
  TodoSelectButtonWrapper,
  InputTodoContainer,
};
