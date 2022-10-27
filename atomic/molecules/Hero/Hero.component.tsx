import Image from 'next/image';

import Button from '../../atoms/Button/Button.component';
import Text from '../../atoms/Text/Text.component';
import heroImage from 'public/assets/illustrations/hero-image.svg';
import Spacer from '../../atoms/Spcaer/Spacer.component';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__left}>
        <Text varient='heroTitle'>Dog Walking, Boarding and Day Care</Text>
        <Spacer top='md' bottom='md'>
          <Text varient='body'>
            We know how special your doggo is, thats why we tail-or our
            experience to meet your dogs needs.
          </Text>
        </Spacer>
        <Spacer right='md'>
          <Button varient='cta' text='Services' />
        </Spacer>
        <Button varient='outline' text='Get in Touch' />
      </div>
      <div className={styles.hero__right}>
        <Image src={heroImage} alt='dog' width={500}></Image>
      </div>
    </div>
  );
};

export default Hero;
