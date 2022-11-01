import Image from 'next/image';
import Text from '../../atoms/Text/Text.component';

import starIcon from '../../../public/assets/icons/star-full.svg';
import starOutlineIcon from '../../../public/assets/icons/star-empty.svg';

import quoteIcon from '../../../public/assets/icons/quote.svg';
import styles from './ReviewCard.module.scss';
import Spacer from '../../atoms/Spcaer/Spacer.component';

const ReviewCard: React.FC = () => {
  // for (let i = 0; i < rating; i++) {
  //   <Image src={starIcon} alt='star' />;
  // }
  return (
    <div className={styles.card}>
      <Text varient='servicesTitle'>Amazing Service</Text>
      <Spacer top='sm' bottom='xs'>
        <Image src={quoteIcon} alt='quote' />
      </Spacer>
      <Text varient='body'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Spacer top='sm'>
        <Image className={styles.star__icon} src={starIcon} alt='rating star' />
        <Image className={styles.star__icon} src={starIcon} alt='rating star' />
        <Image className={styles.star__icon} src={starIcon} alt='rating star' />
        <Image className={styles.star__icon} src={starIcon} alt='rating star' />
        <Image
          className={styles.star__icon}
          src={starOutlineIcon}
          alt='rating star'
        />
      </Spacer>
    </div>
  );
};

export default ReviewCard;
