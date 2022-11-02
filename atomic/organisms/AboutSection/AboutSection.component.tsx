import Image from 'next/image';

import Button from '../../atoms/Button/Button.component';
import Spacer from '../../atoms/Spcaer/Spacer.component';
import Text from '../../atoms/Text/Text.component';
import styles from './AboutSection.module.scss';

import debbieImg from '../../../public/assets/debbie.png';

interface IAboutSectionProps {
  title: string;
  intro: string;
  text: string[];
  btnText: string;
  btnUrl: string;
  imgUrl: string;
  imgAlt: string;
}

const AboutSection: React.FC<IAboutSectionProps> = ({
  title,
  intro,
  text,
  btnText,
  btnUrl,
  imgUrl,
  imgAlt,
}) => {
  return (
    <section id='about' className={styles.section}>
      <Spacer left='lg' right='lg' top='lg' bottom='lg'>
        <Text varient='sectionTitle'>{title}</Text>
        <Spacer top='lg' />
        <div className={styles.about__container}>
          <div className={styles.left}>
            <Image src={debbieImg} alt={imgAlt} width={450} height={437} />
          </div>
          <div className={styles.rigjt}>
            <Text varient='sectionTitle'>{intro}</Text>
            <Spacer top='md' bottom='lg'>
              {text.map((paragraph) => (
                <Text varient='body' key={paragraph}>
                  {paragraph}
                </Text>
              ))}
            </Spacer>
            <Button varient='cta' text={btnText} href={btnUrl} />
          </div>
        </div>
      </Spacer>
    </section>
  );
};

export default AboutSection;
