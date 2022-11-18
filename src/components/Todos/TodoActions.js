import { useEffect, useState } from 'react';
import {
  RiDeleteBin2Line,
  RiRefreshLine,
  RiDownloadCloud2Line,
} from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodoActions.module.css';

const API_URL = 'https://jsonplaceholder.typicode.com/todos/';

const TodoActions = (props) => {
  const { completedTodosExist, resetTodos, clearCompleted, loadTodos } = props;

  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();

        loadTodos(
          json.map((item) => {
            delete Object.assign(item, { body: item.title }).title;
            delete Object.assign(item, { isCompleted: item.completed })
              .completed;
            return item;
          })
        );
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className={styles.todoActionsContainer}>
      <Button action={() => {}} title="Load from site">
        <RiDownloadCloud2Line />
      </Button>
      <Button action={resetTodos} title="Reset todos">
        <RiRefreshLine />
      </Button>
      <Button
        action={clearCompleted}
        title="Delete completed todos"
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
};

export default TodoActions;
