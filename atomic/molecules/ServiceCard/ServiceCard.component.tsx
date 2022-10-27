import Image from 'next/image';
import Spacer from '../../atoms/Spcaer/Spacer.component';
import Text from '../../atoms/Text/Text.component';
import styles from './ServiceCard.module.scss';

import pawImage from '../../../public/assets/icons/paw.svg';

type rate = 'day' | 'week' | 'night';
export interface ICardProps {
  title: string;
  body: string;
  list: string[];
  price: number;
  rate: rate;
}

const ServiceCard: React.FC<ICardProps> = ({
  title,
  body,
  list,
  price,
  rate,
}) => {
  return (
    <div className={styles.card}>
      <Text varient='servicesTitle'>{title}</Text>
      <Spacer top='xs' bottom='xs'>
        <Text varient='body'>{body}</Text>
      </Spacer>
      <Spacer bottom='xs'>
        <ul className={styles.card__list}>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Spacer>
      <p className={styles.card__price}>
        <Text varient='servicesPrice'>£{price}</Text> per {rate}
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
