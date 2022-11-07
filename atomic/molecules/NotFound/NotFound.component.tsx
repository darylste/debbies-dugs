import Image from 'next/image';
import Button from '../../atoms/Button/Button.component';
import Spacer from '../../atoms/Spcaer/Spacer.component';
import Text from '../../atoms/Text/Text.component';

import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <Text varient='heroTitle'>Oops, page not found</Text>
      <Spacer top='lg' bottom='md'>
        <Image
          className={styles.img}
          src='/assets/illustrations/fetch.svg'
          width={250}
          height={250}
          alt='dog'
        />
      </Spacer>
      <Text varient='body'>
        The page you&apos;re looking for doesn&apos;t exist. Click bellow to
        return home.
      </Text>
      <Spacer bottom='lg' />
      <Button href='/' text='Home' varient='cta' />
    </div>
  );
};

export default NotFound;
