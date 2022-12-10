import { useEffect, useState } from 'react';
import { getTodos } from '../../apis/todo';
import InputTodo from './InputTodo';
import TodoCardList from './TodoCardList';
import * as S from './Todo.style';
const TodoForm = () => {
  const [todoList, setTodoList] = useState([]);

  const asyncGetTodos = async () => {
    const res = await getTodos();
    setTodoList(res.data);
  };

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
