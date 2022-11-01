import Spacer from '../../atoms/Spcaer/Spacer.component';
import Text from '../../atoms/Text/Text.component';
import ReviewCard from '../../molecules/ReviewCard/ReviewCard.component';

import styles from './ReviewSection.module.scss';

const ReviewSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <Spacer left='lg' right='lg' top='md' bottom='md'>
        <Text varient='sectionTitle'>What our clients say</Text>
        <Spacer top='lg' />
        <div className={styles.card__container}>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </Spacer>
    </section>
  );
};

export default ReviewSection;
