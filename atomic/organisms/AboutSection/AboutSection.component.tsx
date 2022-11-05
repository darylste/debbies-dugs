import Image from 'next/image';

import Button from '../../atoms/Button/Button.component';
import Spacer from '../../atoms/Spcaer/Spacer.component';
import Text from '../../atoms/Text/Text.component';

import { IAboutProps } from '../../../utils/types';
import { urlFor } from '../../../lib/client';

import styles from './AboutSection.module.scss';

interface IAboutSectionProps {
  content: IAboutProps;
}

const AboutSection: React.FC<IAboutSectionProps> = ({
  content: { title, text, btnText, btnUrl, img },
}) => {
  return (
    <section id='about' className={styles.section}>
      <Spacer left='lg' right='lg' top='lg' bottom='lg'>
        <Text varient='sectionTitle'>About us</Text>
        <Spacer top='lg' />
        <div className={styles.about__container}>
          <div className={styles.left}>
            <Image
              className={styles.about__img}
              src={urlFor(img.asset).url()}
              alt={img.alt}
              width={img.width}
              height={img.height}
            />
          </div>
          <div className={styles.rigjt}>
            <Text varient='sectionTitle'>{title}</Text>
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
