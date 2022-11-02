import Image from 'next/image';

import Text from '../../atoms/Text/Text.component';
import starIcon from '../../../public/assets/icons/star-full.svg';
import starOutlineIcon from '../../../public/assets/icons/star-empty.svg';
import quoteIcon from '../../../public/assets/icons/quote.svg';
import Spacer from '../../atoms/Spcaer/Spacer.component';
import { IReviewCardProps } from '../../../utils/types';

import styles from './ReviewCard.module.scss';

const ReviewCard: React.FC<IReviewCardProps> = ({ title, text, rating }) => {
  return (
    <div className={styles.card}>
      <Text varient='servicesTitle'>{title}</Text>
      <Spacer top='sm' bottom='xs'>
        <Image src={quoteIcon} alt='quote' />
      </Spacer>
      <Text varient='body'>{text}</Text>
      <Spacer top='sm'>
        <p>{rating}</p>
      </Spacer>
    </div>
  );
};

export default ReviewCard;
