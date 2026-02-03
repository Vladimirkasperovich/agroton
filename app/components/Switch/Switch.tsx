'use client';
import arrowRight from '@/public/arrow-right.svg';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Switch.module.css';

export const Switch = () => {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn((prevState) => !prevState);
  return (
    <button
      className={styles.switch}
      onClick={toggle}
      type="button"
      role="switch"
      aria-checked={isOn}
    >
      <span className={styles.label}>See catalog</span>
      <span className={`${styles.thumb} ${isOn ? styles.on : ''}`}>
        <Image src={arrowRight} alt="arrow" width={10} height={10} />
      </span>
    </button>
  );
};
