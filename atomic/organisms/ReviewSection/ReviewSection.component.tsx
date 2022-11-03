import Spacer from '../../atoms/Spcaer/Spacer.component';
import Text from '../../atoms/Text/Text.component';
import ReviewCard from '../../molecules/ReviewCard/ReviewCard.component';
import { IReviewCardProps } from '../../../utils/types';

import styles from './ReviewSection.module.scss';

interface IReviewSectionProps {
  content: {
    title: string;
    cards: IReviewCardProps[];
  };
}

const ReviewSection: React.FC<IReviewSectionProps> = ({
  content: { title, cards },
}) => {
  return (
    <section className={styles.section}>
      <Spacer left='lg' right='lg' top='md' bottom='md'>
        <Text varient='sectionTitle'>{title}</Text>
        <Spacer top='lg' />
        <div className={styles.card__container}>
          {cards.map((card) => (
            <ReviewCard key={card.title} {...card} />
          ))}
        </div>
      </Spacer>
    </section>
  );
};

export default ReviewSection;
