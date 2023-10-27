import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Sefourdo.</div>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>BERANDA</Link>
        <Link href="/" className={styles.link}>PROFIL</Link>
        <Link href="/" className={styles.link}>BERITA</Link>
        <Link href="/" className={styles.link}>KONTAK</Link>
        <AuthLinks />
        <ThemeToggle />
      </div>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook icon" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram icon" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube icon" width={24} height={24} />
      </div>
    </div>
  )
}

export default Navbar