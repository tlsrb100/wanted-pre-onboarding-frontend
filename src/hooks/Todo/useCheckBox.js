import { useState, useRef } from 'react';
import { updateTodo } from '../../apis/todo';
import useGetTodoList from './useGetTodoList';
const useCheckBox = (initialValue = null) => {
  const [isChecked, setIsChecked] = useState(initialValue);
  const { fetchAndSetTodo } = useGetTodoList();
  const inputRef = useRef('');
  const toggleCheckHandler = async (id) => {
    try {
      const body = {
        todo: inputRef.current.value,
        isCompleted: !isChecked,
      };
      await updateTodo(body, id);
      setIsChecked((pre) => !pre);
      fetchAndSetTodo();
    } catch (error) {
      alert(`체크박스 에러 :  ${error.response.data.message}`);
    }
  };

  return { isChecked, setIsChecked, inputRef, toggleCheckHandler };
};

export default useCheckBox;
