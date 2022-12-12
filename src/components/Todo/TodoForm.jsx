import InputTodo from './InputTodo';
import TodoCardList from './TodoCardList';
import * as S from './Todo.style';
import useGetTodoList from '../../hooks/Todo/useGetTodoList';
import { useEffect } from 'react';
const TodoForm = () => {
  const { todoList, fetchAndSetTodo } = useGetTodoList([]);

  useEffect(() => {
    fetchAndSetTodo();
  }, []);

  return (
    <S.TodoFormContainer>
      <InputTodo onClick={fetchAndSetTodo} />
      <TodoCardList todoList={todoList} fetchAndSetTodo={fetchAndSetTodo} />
    </S.TodoFormContainer>
  );
};

export default TodoForm;
