import TodoForm from '../../components/Todo/TodoForm';
import PageTemplate from '../../components/@commons/PageTemplate/PageTemplate';
import theme from '../../styles/theme';

const Todo = () => {
  console.log(theme);
  return (
    <PageTemplate title='Todo List'>
      <TodoForm />
    </PageTemplate>
  );
};

export default Todo;
