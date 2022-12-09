import * as S from './Todo.style';
import TodoSelectButton from './TodoSelectButton';
import { useRef, useState, useEffect } from 'react';
import { updateTodo, deleteTodo } from '../../apis/todo';
import { COLOR } from '../../styles/color';

const TodoCard = ({ id, content, isCompleted, refetchFunc }) => {
  const [isSelectedEditButton, setIsSelectedEditButton] = useState(false);
  const [isChecked, setIsChecked] = useState(isCompleted);
  const inputContent = useRef('');

  const toggleCheckHandler = async (id) => {
    try {
      const body = {
        todo: inputContent.current.value,
        isCompleted: !isChecked,
      };
      const res = await updateTodo(body, id);
      console.log(res);
      setIsChecked((pre) => !pre);
      refetchFunc();
    } catch (error) {
      console.log('Error', error.message);
    }
  };

  const changeEditHandler = () => {
    setIsSelectedEditButton((pre) => !pre);
  };

  const deleteHandler = async (id) => {
    try {
      const res = await deleteTodo(id);
      refetchFunc();
    } catch (error) {
      console.log('Error', error.message);
    }
  };

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
      <input
        type='checkbox'
        onClick={() => toggleCheckHandler(id)}
        value={true}
        defaultChecked={isChecked}
        // disabled={!isSelectedEditButton}
      />
      <S.TodoContentBoxWrapper
        ref={inputContent}
        isChecked={isChecked}
        disabled={!isSelectedEditButton}
      />
      {!isSelectedEditButton ? (
        <S.TodoSelectButtonContainer>
          <TodoSelectButton title='수정' onClick={changeEditHandler} />
          <TodoSelectButton title='삭제' onClick={() => deleteHandler(id)} />
        </S.TodoSelectButtonContainer>
      ) : (
        <S.TodoSelectButtonContainer>
          <TodoSelectButton title='확인' onClick={() => updateHandler(id)} />
          <TodoSelectButton title='취소' onClick={changeEditHandler} />
        </S.TodoSelectButtonContainer>
      )}
    </S.TodoCardContainer>
  );
};

export default TodoCard;
