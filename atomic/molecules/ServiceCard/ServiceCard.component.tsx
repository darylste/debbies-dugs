import Image from 'next/image';
import Spacer from '../../atoms/Spcaer/Spacer.component';
import Text from '../../atoms/Text/Text.component';
import styles from './ServiceCard.module.scss';

import pawImage from '../../../public/assets/icons/paw.svg';

const ServiceCard = () => {
  return (
    <div className={styles.card}>
      <Text varient='servicesTitle'>Dog Walking</Text>
      <Spacer top='xs' bottom='xs'>
        <Text varient='body'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
          molestiae, consequuntur.
        </Text>
      </Spacer>
      <Spacer bottom='xs'>
        <ul className={styles.card__list}>
          <li className={styles.card__list__item}>Item 1</li>
          <li className={styles.card__list__item}>Item 2</li>
          <li className={styles.card__list__item}>Item 3</li>
        </ul>
      </Spacer>
      <p className={styles.card__price}>
        <Text varient='servicesPrice'>£20</Text> per hour
      </p>
      <Image
        className={styles.card__background__image}
        width={120}
        src={pawImage}
        alt='alt'
      />
    </div>
  );
};

export default ServiceCard;
