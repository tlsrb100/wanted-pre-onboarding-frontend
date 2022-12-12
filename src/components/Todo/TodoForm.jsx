import { useEffect, useState } from 'react';
import { getTodos } from '../../apis/todo';
import InputTodo from './InputTodo';
import TodoCardList from './TodoCardList';
import * as S from './Todo.style';
import useGetTodoList from '../../hooks/Todo/useGetTodoList';
const TodoForm = () => {
  const { todoList, asyncGetTodos } = useGetTodoList([]);

  useEffect(() => {
    asyncGetTodos();
  }, []);

  return (
    <S.TodoFormContainer>
      <InputTodo onClick={asyncGetTodos} />
      <TodoCardList todoList={todoList} refetchFunc={asyncGetTodos} />
    </S.TodoFormContainer>
  );
};

export default TodoForm;
