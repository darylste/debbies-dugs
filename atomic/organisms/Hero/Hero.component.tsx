import Image from 'next/image';

import Button from '../../atoms/Button/Button.component';
import Text from '../../atoms/Text/Text.component';
import heroImage from 'public/assets/illustrations/hero-image.svg';
import Spacer from '../../atoms/Spcaer/Spacer.component';
import styles from './Hero.module.scss';

interface IHeroProps {
  title: string;
  text: string;
  ctaBtnText: string;
  ctaBtnLink: string;
  outlineBtnText: string;
  outlineBtnLink: string;
  imgUrl: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
}

const Hero: React.FC<IHeroProps> = ({
  title,
  text,
  ctaBtnText,
  ctaBtnLink,
  outlineBtnText,
  outlineBtnLink,
  imgUrl,
  imgAlt,
  imgWidth,
  imgHeight,
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
            <Spacer right='md'>
              <Button varient='cta' text={ctaBtnText} href={ctaBtnLink} />
            </Spacer>
            <Button
              varient='outline'
              text={outlineBtnText}
              href={outlineBtnLink}
            />
          </div>
        </div>
        <div className={styles.hero__right}>
          <Image
            src={imgUrl}
            alt={imgAlt}
            width={imgWidth}
            height={imgHeight}
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Hero;
