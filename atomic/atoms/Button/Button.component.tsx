import ClassNames from 'classnames';

import styles from './Button.module.scss';

interface IButtonProps {
  text: string;
  varient: 'cta' | 'outline';
}

const Button: React.FC<IButtonProps> = ({ text, varient }) => {
  return <button className={`${styles.btn} ${styles[varient]}`}>{text}</button>;
};

export default Button;
