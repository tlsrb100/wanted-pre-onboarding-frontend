import * as S from './Todo.style';
import TodoSelectButton from './TodoSelectButton';
import { useRef } from 'react';
import { createTodo } from '../../apis/todo';

const InputTodo = ({ onClick }) => {
  const typedInput = useRef('');

  const createHandler = async () => {
    const content = typedInput.current.value;
    const res = await createTodo({ todo: content });
    typedInput.current.value = '';
    onClick();
  };

  return (
    <S.InputTodoContainer>
      <input className='todo-input-content' ref={typedInput} />
      <TodoSelectButton title='등록' onClick={createHandler} />
    </S.InputTodoContainer>
  );
};

export default InputTodo;
