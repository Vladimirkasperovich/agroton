import React from 'react';
import Image from 'next/image';
import Logo from '@/public/logo.svg';
import Link from 'next/link';
import { NAV_ITEMS } from '@/app/components/Header/constants';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <Link href="#" className={styles.logo}>
            <Image src={Logo} alt="Agro logo" />
          </Link>

          <nav className={styles.menu}>
            <ul className={styles.menuList}>
              {NAV_ITEMS.map(({ id, title, href }) => (
                <li key={id} className={styles.menuItem}>
                  <Link href={href} className={styles.menuLink}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link href="#" className={styles.headerContacts}>
            Contact us
          </Link>
        </div>
      </div>
    </header>
  );
};
