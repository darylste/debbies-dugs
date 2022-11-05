import styles from './Button.module.scss';

interface IButtonProps {
  text: string;
  varient: 'cta' | 'outline';
  href: string;
}

const Button: React.FC<IButtonProps> = ({ text, varient, href }) => {
  return (
    <a className={`${styles.btn} ${styles[varient]}`} href={href}>
      {text}
    </a>
  );
};

export default Button;
