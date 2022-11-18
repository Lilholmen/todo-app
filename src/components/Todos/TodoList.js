import { RiDownloadCloud2Line } from 'react-icons/ri';
import { useState } from 'react';
import Todo from './Todo';
import Button from '../UI/Button';
import styles from './TodoList.module.css';

const API_URL = 'https://jsonplaceholder.typicode.com/todos/';

const TodoList = ({ todos, deleteTodo, toggleTodo, loadTodos }) => {
  const [error, setError] = useState('');

  async function fetchData() {
    try {
      const res = await fetch(API_URL);
      const json = await res.json();

      loadTodos(
        json.map((item) => {
          delete Object.assign(item, { body: item.title }).title;
          delete Object.assign(item, { isCompleted: item.completed }).completed;
          return item;
        })
      );
    } catch (error) {
      setError(error.message);
    }
  }

  /* if (error) {
    return <h1>Error: {error}</h1>;
  } */

  return (
    <div className={styles.todoListContainer}>
      {!todos.length && (
        <div className={styles.todoListEmpty}>
          <h2>{error ? `Error: ${error}` : 'Todo list is empty'}</h2>
          <Button action={fetchData} title="Load data from jsonplaceholder">
            <RiDownloadCloud2Line />
          </Button>
        </div>
      )}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
