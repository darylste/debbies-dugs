import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/assets/logo.png';
import styles from './Nav.module.scss';

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <Image
        className={styles.logo}
        src={logo}
        alt='Debbies Dugs Logo'
        width={85}
      />
      <ul className={styles.nav__list}>
        <Link href={'/'}>
          <li className={styles.nav__list__item}>Home</li>
        </Link>
        <Link href={'/#services'}>
          <li className={styles.nav__list__item}>Services</li>
        </Link>
        <Link href={'/#about'}>
          <li className={styles.nav__list__item}>About</li>
        </Link>
        <Link href={'/#gallery'}>
          <li className={styles.nav__list__item}>Gallery</li>
        </Link>
        <Link href={'/contact'}>
          <li className={styles.nav__list__item}>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
