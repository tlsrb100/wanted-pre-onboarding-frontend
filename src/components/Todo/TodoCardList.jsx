import * as S from './Todo.style';
import TodoCard from './TodoCard';

const TodoCardList = ({ todoList, refetchFunc }) => {
  return (
    <S.TodoCardListContainer>
      {todoList?.map((todo, idx) => {
        return (
          <li key={todo.id}>
            <TodoCard
              id={todo.id}
              content={todo.todo}
              isCompleted={todo.isCompleted}
              refetchFunc={refetchFunc}
            />
          </li>
        );
      })}
    </S.TodoCardListContainer>
  );
};

export default TodoCardList;
