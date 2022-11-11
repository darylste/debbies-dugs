/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import logo from '../../../public/assets/logo.png';
import styles from './Nav.module.scss';

const Nav: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // const scrollHandle = (e) => {
  //   e.preventDefault();
  //   let id = e.target.id;
  //   let position = document.getElementById(id.slice(0, id.length - 1)); //removing extra last - (dash)
  //   window.location.href = '#' + id.slice(0, id.length - 1); // changing the url
  //   position && position.scrollIntoView({ behavior: 'smooth', block: 'start' }); //scrolling the page
  // };

  if (isNavOpen) {
    return (
      <div className={styles.nav__mobile}>
        <div className={styles.nav__mobile__top}>
          <Link href={'/'}>
            <Image
              className={styles.logo}
              src={logo}
              alt='Debbies Dugs Logo'
              width={85}
            />
          </Link>
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
          <li className={styles.nav__mobile__list__item}>
            <Link href={'/'} onClick={() => setIsNavOpen(false)}>
              Home
            </Link>
          </li>
          <li className={styles.nav__mobile__list__item}>
            <Link href={'/#services'} onClick={() => setIsNavOpen(false)}>
              Services
            </Link>
          </li>
          <li className={styles.nav__mobile__list__item}>
            <Link href={'/#about'} onClick={() => setIsNavOpen(false)}>
              About
            </Link>
          </li>
          <li className={styles.nav__mobile__list__item}>
            <Link href={'/#gallery'} onClick={() => setIsNavOpen(false)}>
              Gallery
            </Link>
          </li>
          <li className={styles.nav__mobile__list__item}>
            <Link href={'/contact'} onClick={() => setIsNavOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <React.Fragment>
      <nav className={styles.nav}>
        <Link href={'/'}>
          <Image
            className={styles.logo}
            src={logo}
            alt='Debbies Dugs Logo'
            width={85}
          />
        </Link>
        <ul className={styles.nav__list}>
          <li className={styles.nav__list__item}>
            <Link href={'/'}>Home</Link>
          </li>
          <li className={styles.nav__list__item}>
            <a href='/#services'>Services</a>
          </li>
          <li className={styles.nav__list__item}>
            <a href='/#about'>About</a>
          </li>
          <li className={styles.nav__list__item}>
            <a href='/#gallery'>Gallery</a>
          </li>
          <li className={styles.nav__list__item}>
            <Link href={'/contact'}>Contact</Link>
          </li>
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
