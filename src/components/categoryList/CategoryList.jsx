import React from 'react';
import styles from './categoryList.module.css';
import Link from 'next/link';
import Image from 'next/image';

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pilih Kategori</h1>
      <div className={styles.categories}>
          <Link href="/blog?cat=pendidikan" className={`${styles.category} ${styles.pendidikan}`}>
            <Image src="/style.png" alt="" width={32} height={32} className={styles.image}/>
            pendidikan
          </Link>
          <Link href="/blog?cat=ekskul" className={`${styles.category} ${styles.ekskul}`}>
            <Image src="/fashion.png" alt="" width={32} height={32} className={styles.image}/>
            ekskul
          </Link>
          <Link href="/blog?cat=kurikulum" className={`${styles.category} ${styles.kurikulum}`}>
            <Image src="/food.png" alt="" width={32} height={32} className={styles.image}/>
            kurikulum
          </Link>
          <Link href="/blog?cat=teknologi" className={`${styles.category} ${styles.teknologi}`}>
            <Image src="/travel.png" alt="" width={32} height={32} className={styles.image}/>
            teknologi
          </Link>
          <Link href="/blog?cat=p5" className={`${styles.category} ${styles.p5}`}>
            <Image src="/culture.png" alt="" width={32} height={32} className={styles.image}/>
            p5
          </Link>
          <Link href="/blog?cat=lomba" className={`${styles.category} ${styles.lomba}`}>
            <Image src="/coding.png" alt="" width={32} height={32} className={styles.image}/>
            lomba
          </Link>
      </div>
    </div>
  )
}

export default CategoryList