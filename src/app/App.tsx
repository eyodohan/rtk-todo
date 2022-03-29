import AddTodo from '../features/todoList/AddTodo';
import TodoList from '../features/todoList/TodoList';
import Footer from '../features/visibilityFilter/Footer';
import { useDispatch } from 'react-redux';
import { loadTodos, createTodoList } from '../features/todoList/todoSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.location.pathname === '/') dispatch(createTodoList());
    else dispatch(loadTodos());
  }, [dispatch]);

  return (
    <div>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
