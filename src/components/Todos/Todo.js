import styles from './Todo.module.css';

const Todo = ({ text, deleteTodo }) => {
  return (
    <div className={styles.todo}>
      <h1>{text}</h1>
    </div>
  );
};

export default Todo;
