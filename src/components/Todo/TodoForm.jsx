import { useEffect, useState } from 'react';
import { getTodos } from '../../apis/todo';
import InputTodo from './InputTodo';
import TodoCardList from './TodoCardList';

const TodoForm = () => {
  const [todoList, setTodoList] = useState([]);
  const asyncGetTodos = async () => {
    const res = await getTodos();
    console.log('투두리스트 요청응답은', res);
    setTodoList(res.data);
  };

  useEffect(() => {
    asyncGetTodos();
  }, []);

  return (
    <>
      <TodoCardList todoList={todoList} refetchFunc={asyncGetTodos} />
      <InputTodo onClick={asyncGetTodos} />
    </>
  );
};

export default TodoForm;
