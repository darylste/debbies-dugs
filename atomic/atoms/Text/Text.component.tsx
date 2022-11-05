import styles from './Text.module.scss';

type Varient =
  | 'heroTitle'
  | 'body'
  | 'servicesTitle'
  | 'servicesPrice'
  | 'sectionTitle'
  | 'btnText'
  | 'footerTitle'
  | 'socialText';

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
    case 'servicesTitle':
      return <h3 className={styles.servicesTitle}>{children}</h3>;
    case 'servicesPrice':
      return <span className={styles.servicesPrice}>{children}</span>;
    case 'sectionTitle':
      return <h2 className={styles.sectionTitle}>{children}</h2>;
    case 'btnText':
      return <p className={styles.btnText}>{children}</p>;
    case 'footerTitle':
      return <h4 className={styles.footerTitle}>{children}</h4>;
    case 'socialText':
      return <p className={styles.socialText}>{children}</p>;
  }
};

export default Text;
