import { useState, useEffect } from 'react';
import { getTodo } from '../../apis/todo';

const useGetTodoList = (initialValue = []) => {
  const [todoList, setTodoList] = useState(initialValue);

  const fetchAndSetTodo = async () => {
    try {
      const res = await getTodo();
      setTodoList(res.data);
    } catch (error) {
      alert(`Todo fetch 에러 :  ${error.response.data.message}`);
    }
  };

  return { todoList, fetchAndSetTodo };
};

export default useGetTodoList;
