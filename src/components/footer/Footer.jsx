import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo-smp4.png" alt="smpn 4 dongko" width={50} height={50}/>
          <h1 className={styles.logoText}>SMPN 4 Dongko</h1>
        </div>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio delectus, et enim consequatur, eveniet error assumenda debitis harum corporis maxime, doloremque iusto quae. Laborum fugiat dicta ducimus molestiae saepe.</p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt=""width={18} height={18}/>
          <Image src="/instagram.png" alt=""width={18} height={18}/>
          <Image src="/youtube.png" alt=""width={18} height={18}/>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Beranda</Link>
          <Link href="/">Profil</Link>
          <Link href="/">Berita</Link>
          <Link href="/">Kontak</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Pendidikan</Link>
          <Link href="/">Ekskul</Link>
          <Link href="/">Kurikulum</Link>
          <Link href="/">Teknologi</Link>
          <Link href="/">P5</Link>
          <Link href="/">Lomba</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Sosial Media</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">YouTube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer