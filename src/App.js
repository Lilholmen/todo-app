import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';
import TodoActions from './components/Todos/TodoActions';
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

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const loadTodosHandler = (loadedTodos) => {
    setTodos(loadedTodos);
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const clearCompletedHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCounter = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodoActions
          loadTodos={loadTodosHandler}
          completedTodosExist={!!completedTodosCounter}
          resetTodos={resetTodosHandler}
          clearCompleted={clearCompletedHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {!!completedTodosCounter && (
        <h2>{`You have complete ${completedTodosCounter} todo${
          completedTodosCounter > 1 ? 's' : ''
        }`}</h2>
      )}
    </div>
  );
}

export default App;
