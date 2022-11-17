import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';

const Todo = ({ todo, deleteTodo }) => {
  return (
    <div onDoubleClick={() => deleteTodo(todo.id)} className={styles.todo}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.body}</div>
    </div>
  );
};

export default Todo;
