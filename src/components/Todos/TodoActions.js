import { RiDeleteBin2Line } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodoActions.module.css';

const TodoActions = () => {
  return (
    <div>
      <Button icon={RiDeleteBin2Line} action={() => console.log(1)} />
      <Button icon={RiDeleteBin2Line} action={() => console.log(2)} />
    </div>
  );
};

export default TodoActions;
