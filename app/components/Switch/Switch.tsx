'use client';
import arrowRight from '@/public/arrow-right.svg';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Switch.module.css';
export const Switch = () => {
  const [isActive, setIsActive] = useState(false);
  const toggle = () => setIsActive((prevState) => !prevState);
  return (
    <div className={styles.switch}>
      <label className={styles.switchLabel}>See catalog</label>
      <button className={`${styles.switchBtn} ${isActive ? styles.on : ''}`} onClick={toggle}>
        <Image src={arrowRight} alt="arrow" width={10} height={10} />
      </button>
    </div>
  );
};
