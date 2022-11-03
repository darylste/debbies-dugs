import Spacer from '../../atoms/Spcaer/Spacer.component';
import Text from '../../atoms/Text/Text.component';
import ServiceCard from '../../molecules/ServiceCard/ServiceCard.component';
import { ICardProps } from '../../../utils/types';

import styles from './ServicesSection.module.scss';

interface IServicesSectionProps {
  cards: ICardProps[];
}

const ServicesSection: React.FC<IServicesSectionProps> = ({ cards }) => {
  return (
    <section id='services' className={styles.section}>
      <Text varient='sectionTitle'>Our Services</Text>
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
