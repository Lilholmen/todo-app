const Button = ({ icon, action }) => {
  return <button onClick={action}>{icon}</button>;
};

export default Button;
