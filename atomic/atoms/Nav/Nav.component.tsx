import React from 'react';
import Image from 'next/image';

import styles from './Nav.module.scss';
import logo from '../../../public/assets/logo.png';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Image
        className={styles.logo}
        src={logo}
        alt='Debbies Dugs Logo'
        width={100}
        height={100}
      />
      <ul className={styles.nav__list}>
        <li className={styles.nav__list__item}>Home</li>
        <li className={styles.nav__list__item}>Services</li>
        <li className={styles.nav__list__item}>About</li>
        <li className={styles.nav__list__item}>Gallery</li>
        <li className={styles.nav__list__item}>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
