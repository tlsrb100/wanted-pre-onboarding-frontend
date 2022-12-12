import * as S from './Todo.style';
import { useRef } from 'react';
import { createTodo } from '../../apis/todo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
const InputTodo = ({ onClick }) => {
  const typedInput = useRef('');

  const createHandler = async () => {
    try {
      const content = typedInput.current.value;
      await createTodo({ todo: content });
      typedInput.current.value = '';
      onClick();
    } catch (error) {
      alert(`Todo 등록 에러 :  ${error.response.data.message}`);
    }
  };

  return (
    <S.InputTodoContainer>
      <input className='todo-input-content' ref={typedInput} />
      <div className='add-icon-box' onClick={createHandler}>
        <FontAwesomeIcon icon={faCirclePlus} size='2x' />
      </div>
    </S.InputTodoContainer>
  );
};

export default InputTodo;
