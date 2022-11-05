import Image from 'next/image';

import Text from '../../atoms/Text/Text.component';
import quoteIcon from '../../../public/assets/icons/quote.svg';
import Spacer from '../../atoms/Spcaer/Spacer.component';
import { IReviewCardProps } from '../../../utils/types';

import styles from './ReviewCard.module.scss';
import { displayRating } from './utils';

const ReviewCard: React.FC<IReviewCardProps> = ({ title, text, rating }) => {
  displayRating;
  return (
    <div className={styles.card}>
      <Text varient='servicesTitle'>{title}</Text>
      <Spacer top='sm' bottom='xs'>
        <Image src={quoteIcon} alt='quote' />
      </Spacer>
      <Text varient='body'>{text}</Text>
      <div className={styles.grow}></div>
      <Spacer top='sm'>
        {displayRating(rating).map((img, i) => (
          <Spacer right='xs' key={i}>
            {img}
          </Spacer>
        ))}
      </Spacer>
    </div>
  );
};

export default ReviewCard;
