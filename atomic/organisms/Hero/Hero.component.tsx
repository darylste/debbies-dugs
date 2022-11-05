import Image from 'next/image';

import Button from '../../atoms/Button/Button.component';
import Text from '../../atoms/Text/Text.component';
import Spacer from '../../atoms/Spcaer/Spacer.component';

import { IHeroProps } from '../../../utils/types';
import { urlFor } from '../../../lib/client';

import styles from './Hero.module.scss';

interface IHeroSectionProps {
  content: IHeroProps;
}

const Hero: React.FC<IHeroSectionProps> = ({
  content: {
    title,
    text,
    ctaBtnText,
    ctaBtnUrl,
    outlineBtnText,
    outlineBtnUrl,
    img,
  },
}) => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero__left}>
          <Text varient='heroTitle'>{title}</Text>
          <Spacer top='md' bottom='md'>
            <Text varient='body'>{text}</Text>
          </Spacer>
          <div className={styles.btnGroup}>
            <Button varient='cta' text={ctaBtnText} href={ctaBtnUrl} />
            <Spacer right='md'></Spacer>
            <Button
              varient='outline'
              text={outlineBtnText}
              href={outlineBtnUrl}
            />
          </div>
        </div>
        <div className={styles.hero__right}>
          <Image
            src={urlFor(img.asset).url()}
            alt={img.alt}
            width={img.width}
            height={img.height}
            priority
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Hero;
