import * as S from './Todo.style';
import TodoCard from './TodoCard';

const TodoCardList = ({ todoList }) => {
  console.log('props로 받은 todoList', todoList);
  return (
    <>
      {todoList?.map((todo, idx) => {
        return (
          <TodoCard
            key={todo.id}
            order={todo.id}
            content={todo.todo}
            isCompleted={todo.isCompleted}
          />
        );
      })}
    </>
  );
};

export default TodoCardList;
