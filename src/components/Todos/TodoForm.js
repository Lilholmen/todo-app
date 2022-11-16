import { useState } from 'react';
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
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
};

export default TodoForm;
