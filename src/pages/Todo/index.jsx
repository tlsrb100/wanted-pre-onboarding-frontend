import TodoForm from '../../components/Todo/TodoForm';
import PageTemplate from '../../components/@commons/PageTemplate/PageTemplate';

const Todo = () => {
  return (
    <PageTemplate title='Todo List'>
      <TodoForm />
    </PageTemplate>
  );
};

export default Todo;
