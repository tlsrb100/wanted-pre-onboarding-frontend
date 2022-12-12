import { useState } from 'react';
import { getTodos } from '../../apis/todo';

const useGetTodoList = (initialValue = []) => {
  const [todoList, setTodoList] = useState(initialValue);

  const asyncGetTodos = async () => {
    const res = await getTodos();
    setTodoList(res.data);
  };

  return { todoList, asyncGetTodos };
};

export default useGetTodoList;
