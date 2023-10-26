import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>SMPN 4 Dongko</div>
      <div className={styles.links}>
        <Link href="/">Beranda</Link>
        <Link href="/">Profil</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Kontak</Link>
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