import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} text={todo} />
      ))}
    </div>
  );
};

export default TodoList;
