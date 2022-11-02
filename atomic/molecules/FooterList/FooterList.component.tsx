import Text from '../../atoms/Text/Text.component';
import { IFooterListProps } from '../../../utils/types';

import styles from './FooterList.module.scss';

const FooterList: React.FC<IFooterListProps> = ({ title, list }) => {
  return (
    <div className={styles.footerListContainer}>
      <Text varient='footerTitle'>{title}</Text>
      <ul className={styles.footerList}>
        {list.map((item) => (
          <li key={item} className={styles.footerListItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
