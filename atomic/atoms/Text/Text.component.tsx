import styles from './Text.module.scss';

type Varient = 'heroTitle' | 'body';

interface ITextProps {
  children: React.ReactNode;
  varient: Varient;
}
const Text: React.FC<ITextProps> = ({ children, varient }) => {
  switch (varient) {
    case 'heroTitle':
      return <h1 className={styles.heroTitle}>{children}</h1>;
    case 'body':
      return <p>{children}</p>;
  }
};

export default Text;
