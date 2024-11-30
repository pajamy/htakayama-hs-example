'use client';

import { useState } from 'react';
import Link from "next/link";

import styles from './Header.module.css'

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={styles['site-header']}>
      <div className={styles['site-header__wrapper']}>
        <Link href="/" className={styles.brand}>飛騨高山高等学校</Link>
        <nav className={styles.nav}>
          <button
            className={styles.nav__toggle}
            onClick={handleToggle}
            aria-expanded={isActive ? 'true' : 'false'}
            aria-label={isActive ? 'close menu' : 'menu'}
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
          </button>
          <ul className={`${styles.nav__wrapper} ${isActive ? styles.active : ''}`}>
            <li className={styles.nav__item}><Link href="/okamoto">岡本キャンパス</Link></li>
            <li className={styles.nav__item}><Link href="/yamada">山田キャンパス</Link></li>
            <li className={styles.nav__item}><Link href="/teiji">定時制</Link></li>
            <li className={styles.nav__item}><Link href="/tuushin">通信制</Link></li>
            <li className={styles.nav__item}><Link href="/club">部活動</Link></li>
            <li className={styles.nav__item}><Link href="/contact">お問い合わせ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
