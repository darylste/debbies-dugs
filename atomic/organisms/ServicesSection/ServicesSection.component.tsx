import Spacer from '../../atoms/Spcaer/Spacer.component';
import Text from '../../atoms/Text/Text.component';
import ServiceCard, {
  ICardProps,
} from '../../molecules/ServiceCard/ServiceCard.component';
import styles from './ServicesSection.module.scss';

const propsArr: ICardProps[] = [
  {
    title: 'Dog Walking',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, molestiae, consequuntur.',
    list: ['Item 1', 'Item 2', 'Item 3'],
    price: 10,
    rate: 'day',
  },
  {
    title: 'Doggy Day Care',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, molestiae, consequuntur.',
    list: ['Item 1', 'Item 2', 'Item 3'],
    price: 22,
    rate: 'day',
  },
  {
    title: 'Boarding',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, molestiae, consequuntur.',
    list: ['Item 1', 'Item 2', 'Item 3'],
    price: 30,
    rate: 'day',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <Text varient='sectionTitle'>Our Services</Text>
      <Spacer bottom='lg' />
      <div className={styles.card__container}>
        {propsArr.map((props) => (
          <ServiceCard key={props.title} {...props} />
        ))}
        {/* <ServiceCard {...props} /> */}
      </div>
    </section>
  );
};

export default ServicesSection;
