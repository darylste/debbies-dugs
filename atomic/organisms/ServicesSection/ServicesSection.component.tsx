import Spacer from '../../atoms/Spcaer/Spacer.component';
import Text from '../../atoms/Text/Text.component';
import ServiceCard from '../../molecules/ServiceCard/ServiceCard.component';
import { ICardProps, IServicesSectionProps } from '../../../utils/types';

import styles from './ServicesSection.module.scss';

const ServicesSection: React.FC<IServicesSectionProps> = ({ title, cards }) => {
  return (
    <section id='services' className={styles.section}>
      <Text varient='sectionTitle'>{title}</Text>
      <Spacer bottom='lg' />
      <div className={styles.card__container}>
        {cards.map((props) => (
          <ServiceCard key={props.title} {...props} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
