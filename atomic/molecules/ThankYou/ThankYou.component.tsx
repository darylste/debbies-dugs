import Image from 'next/image';
import Spacer from '../../atoms/Spcaer/Spacer.component';
import Text from '../../atoms/Text/Text.component';
import Button from '../../atoms/Button/Button.component';
import styles from './ThankYou.module.scss';

const ThankYou: React.FC = () => {
  return (
    <div className={styles.container}>
      <Text varient='heroTitle'>Message sent!</Text>
      <Spacer top='lg' bottom='md'>
        <Image
          src={'/assets/illustrations/complete.svg'}
          height={250}
          width={250}
          alt='complete'
        />
      </Spacer>
      <Spacer left='md' right='md' top='md'>
        <Text varient='body'>
          Thanks for reaching out, we have recieved your message and will be in
          touch soon.
        </Text>
      </Spacer>
      <Spacer bottom='lg' />
      <Button href='/' text='Home' varient='cta' />
    </div>
  );
};

export default ThankYou;
