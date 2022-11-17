import { useState } from 'react';
import Button from '../UI/Button';
import styles from './TodoForm.module.css';

const TodoForm = ({ addTodo }) => {
  const [inputText, setInputText] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    addTodo(inputText);
    setInputText('');
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button type="submit">Submit!</Button>
      </form>
    </div>
  );
};

export default TodoForm;
