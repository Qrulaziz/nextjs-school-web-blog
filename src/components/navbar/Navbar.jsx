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
        <Link href="https://www.facebook.com/profile.php?id=100092647030969" target='_blank'><Image src="/facebook.png" alt="facebook icon" width={24} height={24} /></Link>
        <Link href="https://www.instagram.com/smpn4dongko/" target='_blank'><Image src="/instagram.png" alt="instagram icon" width={24} height={24} /></Link>
        <Link href="https://www.youtube.com/@smpn4dongko" target='_blank'><Image src="/youtube.png" alt="youtube icon" width={24} height={24} /></Link>
      </div>
    </div>
  )
}

export default Navbar