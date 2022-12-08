import * as S from './Todo.style';
import TodoCard from './TodoCard';

const TodoCardList = ({ todoList, refetchFunc }) => {
  console.log('props로 받은 todoList', todoList);
  return (
    <>
      {todoList?.map((todo, idx) => {
        return (
          <TodoCard
            key={todo.id}
            id={todo.id}
            content={todo.todo}
            isCompleted={todo.isCompleted}
            refetchFunc={refetchFunc}
          />
        );
      })}
    </>
  );
};

export default TodoCardList;
