import styles from './Button.module.css';

const Button = ({
  action,
  children,
  title,
  type = 'button',
  disabled = false,
}) => {
  return (
    <button
      className={styles.button}
      onClick={action}
      title={title}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
