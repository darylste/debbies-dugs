import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import logo from '../../../public/assets/logo.png';
import styles from './Nav.module.scss';

const Nav: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  if (isNavOpen) {
    return (
      <div className={styles.nav__mobile}>
        <div className={styles.nav__mobile__top}>
          <Image
            className={styles.logo}
            src={logo}
            alt='Debbies Dugs Logo'
            width={85}
          />
          <svg
            onClick={() => setIsNavOpen(false)}
            className={styles.nav__mobile__exit}
            width='44'
            height='44'
            viewBox='0 0 44 44'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              x1='0.433251'
              y1='43.3574'
              x2='42.8597'
              y2='0.930978'
              stroke='black'
            />
            <line
              x1='1.14036'
              y1='0.931115'
              x2='43.5668'
              y2='43.3575'
              stroke='black'
            />
          </svg>
        </div>

        <ul className={styles.nav__mobile__list}>
          <Link href={'/'} onClick={() => setIsNavOpen(false)}>
            <li className={styles.nav__mobile__list__item}>Home</li>
          </Link>
          <Link href={'/#services'} onClick={() => setIsNavOpen(false)}>
            <li className={styles.nav__mobile__list__item}>Services</li>
          </Link>
          <Link href={'/#about'} onClick={() => setIsNavOpen(false)}>
            <li className={styles.nav__mobile__list__item}>About</li>
          </Link>
          <Link href={'/#gallery'} onClick={() => setIsNavOpen(false)}>
            <li className={styles.nav__mobile__list__item}>Gallery</li>
          </Link>
          <Link href={'/contact'} onClick={() => setIsNavOpen(false)}>
            <li className={styles.nav__mobile__list__item}>Contact</li>
          </Link>
        </ul>
      </div>
    );
  }
  return (
    <React.Fragment>
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
        <div className={styles.nav__hamburger}>
          <svg
            onClick={() => setIsNavOpen(true)}
            width='60'
            height='38'
            viewBox='0 0 60 38'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line y1='1.00439' x2='60' y2='1.00439' stroke='black' />
            <line y1='19.001' x2='60' y2='19.001' stroke='black' />
            <line y1='37.001' x2='60' y2='37.001' stroke='black' />
          </svg>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
