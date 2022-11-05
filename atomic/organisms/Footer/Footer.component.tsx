import Link from 'next/link';
import Text from '../../atoms/Text/Text.component';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerListContainer}>
        <Text varient='footerTitle'>About Us</Text>
        <ul className={styles.footerList}>
          <Link href={'/#about'}>
            <li className={styles.footerListItem}>Our Story</li>
          </Link>
          <Link href={'/#services'}>
            <li className={styles.footerListItem}>Pricing</li>
          </Link>
          <Link href={'/#gallery'}>
            <li className={styles.footerListItem}>Gallery</li>
          </Link>
        </ul>
      </div>
      <div className={styles.footerListContainer}>
        <Text varient='footerTitle'>Social Media</Text>
        <ul className={styles.footerList}>
          <Link href={'https://www.facebook.com/Debbiesdugs/'} target='_blank'>
            <li className={styles.footerListItem}>Facebook</li>
          </Link>
          <Link href={'https://www.instagram.com/Debbiesdugs/'} target='_blank'>
            <li className={styles.footerListItem}>Instagram</li>
          </Link>
        </ul>
      </div>
      <div className={styles.footerListContainer}>
        <Text varient='footerTitle'>Get in Touch</Text>
        <ul className={styles.footerList}>
          <Link href={'tel:07999 083627'}>
            <li className={styles.footerListItem}>Call: 07999 083627</li>
          </Link>
          <Link href={'mailto: contact@debbiesdugs.co.uk'}>
            <li className={styles.footerListItem}>
              Email: contact@debbiesdugs.co.uk
            </li>
          </Link>
        </ul>
      </div>
      <div className={styles.footerListContainer}>
        <Text varient='footerTitle'>Legal</Text>
        <ul className={styles.footerList}>
          <Link
            href={
              'https://www.termsofusegenerator.net/live.php?token=xHc4iL0TdqQrABAywitVQsEtBZzTAVM3'
            }
          >
            <li className={styles.footerListItem}>Terms of Use</li>
          </Link>
          <Link href={'/privicypolicy'}>
            <li className={styles.footerListItem}>Privicy Policy</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
