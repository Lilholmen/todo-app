import { useState } from 'react';
import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';
import Button from './components/UI/Button';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todo) => {
    if (todo.trim() !== '') setTodos([...todos, todo]);
    console.log(todos);
  };

  const deleteTodo = (event) => {
    console.log(todos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length ? (
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      ) : (
        'Todo List is empty'
      )}
    </div>
  );
}

export default App;
