import * as S from './Todo.style';
import TodoSelectButton from './TodoSelectButton';
import { useRef } from 'react';
import { createTodo } from '../../apis/todo';

const InputTodo = ({ onClick }) => {
  const typedInput = useRef('');

  const createHandler = async () => {
    const content = typedInput.current.value;
    console.log('등록 내용은', content);
    const res = await createTodo({ todo: content });
    console.log('등록 응답은', res);
    onClick();
  };

  return (
    <S.InputTodoContainer>
      <div className='todo-content-input'>
        <label htmlFor='todo-content'>내용</label>
        <input id='todo-content' ref={typedInput} />
      </div>
      <TodoSelectButton title='등록' onClick={createHandler} />
    </S.InputTodoContainer>
  );
};

export default InputTodo;
