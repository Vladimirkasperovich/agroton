import React from 'react';
import Image from 'next/image';
import Logo from '@/public/Logo.svg';
import Link from 'next/link';
import { NAV_ITEMS } from '@/app/components/Header/constants';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <Link href="#" className={styles.logo}>
            <Image src={Logo} alt="Agro logo" />
          </Link>
          <nav className={styles.menu}>
            <ul className={styles.menu__list}>
              {NAV_ITEMS.map(({ id, title, href }) => (
                <li key={id} className={styles.menu__item}>
                  <Link href={href} className={styles.menu__link}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href="#" className={styles.header__contacts}>
            Contact us
          </Link>
        </div>
      </div>
    </header>
  );
};
