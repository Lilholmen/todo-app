import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodoActions.module.css';

const TodoActions = ({ completedTodosExist, resetTodos, clearCompleted }) => {
  return (
    <div className={styles.todoActionsContainer}>
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
