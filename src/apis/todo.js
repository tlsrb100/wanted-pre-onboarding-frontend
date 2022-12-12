import { apiClient } from './auth';

const createTodo = async (body) => {
  const res = await apiClient.post('/todos', body);
  return res;
};

const getTodo = async () => {
  const res = await apiClient.get('/todos');
  return res;
};

const updateTodo = async (body, id) => {
  const res = await apiClient.put(`/todos/${id}`, body);
  return res;
};

const deleteTodo = async (id) => {
  const res = await apiClient.delete(`/todos/${id}`);
  return res;
};

export { createTodo, getTodo, updateTodo, deleteTodo };
