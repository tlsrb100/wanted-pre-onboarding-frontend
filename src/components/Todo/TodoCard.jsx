import * as S from './Todo.style';
import TodoSelectButton from './TodoSelectButton';
import { useRef, useState, useEffect } from 'react';
import { updateTodo, deleteTodo } from '../../apis/todo';

const TodoCard = ({ order, content, isCompleted }) => {
  const [isSelectedEditButton, setIsSelectedEditButton] = useState(false);
  const [isChecked, setIsChecked] = useState(isCompleted);
  const inputContent = useRef('');

  const toggleCheckHandler = () => {
    setIsChecked((pre) => !pre);
  };
  const changeEditHandler = () => {
    setIsSelectedEditButton((pre) => !pre);
  };

  const updateHandler = () => {
    console.log(inputContent.current.value);
    updateTodo();
  };

  useEffect(() => {
    inputContent.current.value = content;
  }, []);

  return (
    <S.TodoCardContainer>
      <input
        type='checkbox'
        onClick={toggleCheckHandler}
        value={true}
        defaultChecked={isChecked}
      />
      <S.TodoContentBoxWrapper ref={inputContent} />
      {!isSelectedEditButton ? (
        <S.TodoSelectButtonContainer>
          <TodoSelectButton title='수정' onClick={changeEditHandler} />
          <TodoSelectButton title='삭제' />
        </S.TodoSelectButtonContainer>
      ) : (
        <S.TodoSelectButtonContainer>
          <TodoSelectButton title='제출' onClick={updateHandler} />
          <TodoSelectButton title='취소' onClick={changeEditHandler} />
        </S.TodoSelectButtonContainer>
      )}
    </S.TodoCardContainer>
  );
};

export default TodoCard;
