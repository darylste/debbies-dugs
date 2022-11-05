import styles from './Button.module.scss';

interface IButtonProps {
  text: string;
  varient: 'cta' | 'outline' | 'form';
  href?: string;
  disabled?: boolean;
  type?: 'submit';
}

const Button: React.FC<IButtonProps> = ({
  text,
  varient,
  href = '/',
  disabled,
  type,
}) => {
  if (varient === 'form') {
    return (
      <button disabled={disabled} type={type} className={`${styles[varient]}`}>
        {text}
      </button>
    );
  }
  return (
    <a className={`${styles.btn} ${styles[varient]}`} href={href}>
      {text}
    </a>
  );
};

export default Button;
