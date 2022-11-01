import Image from 'next/image';

import Button from '../../atoms/Button/Button.component';
import Spacer from '../../atoms/Spcaer/Spacer.component';
import Text from '../../atoms/Text/Text.component';
import styles from './AboutSection.module.scss';

import debbieImg from '../../../public/assets/debbie.png';

const AboutSection = () => {
  return (
    <section className={styles.section}>
      <Spacer left='lg' right='lg' top='lg' bottom='lg'>
        <Text varient='sectionTitle'>About Us</Text>
        <Spacer top='lg' />
        <div className={styles.about__container}>
          <div className={styles.left}>
            <Image src={debbieImg} alt='debbie' width={450} />
          </div>
          <div className={styles.rigjt}>
            <Text varient='sectionTitle'>Hey, I&apos;m Debbie!</Text>
            <Spacer top='md' bottom='lg'>
              <Text varient='body'>
                I&apos;m a dog walker and lover, local to Glasgow&apos;s
                east-end. I offer a range of services and can tail-or any
                package for your furry-friend!
              </Text>
              <Spacer top='xs' />
              <Text varient='body'>
                I am fully insured and K9 first aid trained meaning you can rest
                easy sending your doggo for a day with Debbie&apos;s Dugs.
                Please reach out and we can explore what package suits you best.
              </Text>
            </Spacer>
            <Button varient='cta' text='Get in Touch' href='/' />
          </div>
        </div>
      </Spacer>
    </section>
  );
};

export default AboutSection;
