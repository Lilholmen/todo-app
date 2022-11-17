import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    if (text.trim() !== '')
      setTodos([...todos, { id: uuidv4(), body: text, isComplited: false }]);
  };

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((todo) => todo.id !== index));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
