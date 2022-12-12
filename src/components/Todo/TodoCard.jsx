import * as S from './Todo.style';
import TodoSelectButton from './TodoSelectButton';
import { useRef, useState, useEffect } from 'react';
import { updateTodo, deleteTodo } from '../../apis/todo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faPenClip,
  faTrash,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

const TodoCard = ({ id, content, isCompleted, refetchFunc }) => {
  const [isSelectedEditButton, setIsSelectedEditButton] = useState(false);
  const [isChecked, setIsChecked] = useState(isCompleted);
  const inputContent = useRef('');

  //체크박스 핸들러
  const toggleCheckHandler = async (id) => {
    try {
      const body = {
        todo: inputContent.current.value,
        isCompleted: !isChecked,
      };
      const res = await updateTodo(body, id);
      setIsChecked((pre) => !pre);
      refetchFunc();
    } catch (error) {
      console.log('Error', error.message);
      alert(`다시 시도해주세요. ${error.message}`);
    }
  };

  //수정 모드 핸들러
  const changeEditHandler = () => {
    setIsSelectedEditButton((pre) => !pre);
  };

  //삭제 모드 핸들러
  const deleteHandler = async (id) => {
    try {
      const res = await deleteTodo(id);
      refetchFunc();
    } catch (error) {
      console.log('Error', error.message);
    }
  };

  //수정 후 업데이트 핸들러
  const updateHandler = async (id) => {
    try {
      const body = { todo: inputContent.current.value, isCompleted: isChecked };
      const res = await updateTodo(body, id);
      refetchFunc();
    } catch (error) {
      console.log('Error', error.message);
    } finally {
      setIsSelectedEditButton((pre) => !pre);
    }
  };

  useEffect(() => {
    inputContent.current.value = content;
  }, [content]);

  return (
    <S.TodoCardContainer isChecked={isChecked}>
      <div className='checkbox-container'>
        <input
          type='checkbox'
          onChange={() => toggleCheckHandler(id)}
          checked={isChecked}
        />
      </div>
      <S.TodoContentBoxWrapper
        ref={inputContent}
        isChecked={isChecked}
        disabled={!isSelectedEditButton}
        maxLength='28'
      />
      {!isSelectedEditButton ? (
        <S.TodoSelectButtonContainer>
          <TodoSelectButton
            onClick={changeEditHandler}
            width='20px'
            height='30px'
            radius='10px'
          >
            <FontAwesomeIcon icon={faPenClip} />
          </TodoSelectButton>
          <TodoSelectButton
            title='삭제'
            onClick={() => deleteHandler(id)}
            width='20px'
            height='30px'
            radius='10px'
          >
            {' '}
            <FontAwesomeIcon icon={faTrash} />
          </TodoSelectButton>
        </S.TodoSelectButtonContainer>
      ) : (
        <S.TodoSelectButtonContainer>
          <TodoSelectButton
            title='확인'
            onClick={() => updateHandler(id)}
            width='20px'
            height='30px'
            radius='10px'
          >
            <FontAwesomeIcon icon={faCheck} />
          </TodoSelectButton>
          <TodoSelectButton
            title='취소'
            onClick={changeEditHandler}
            width='20px'
            height='30px'
            radius='10px'
          >
            <FontAwesomeIcon icon={faXmark} />
          </TodoSelectButton>
        </S.TodoSelectButtonContainer>
      )}
    </S.TodoCardContainer>
  );
};

export default TodoCard;
