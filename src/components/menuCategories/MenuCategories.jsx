import Link from 'next/link'
import React from 'react'
import styles from "./menuCategories.module.css"

const MenuCategories = () => {
  return (     
      <div className={styles.categoryList}>
        <Link href="/blog?cat=pendidikan" className={`${styles.categoryItem} ${styles.pendidikan}`}>Pendidikan</Link>
        <Link href="/blog?cat=ekskul" className={`${styles.categoryItem} ${styles.ekskul}`}>Ekskul</Link>
        <Link href="/blog?cat=kurikulum" className={`${styles.categoryItem} ${styles.kurikulum}`}>Kurikulum</Link>
        <Link href="/blog?cat=teknologi" className={`${styles.categoryItem} ${styles.teknologi}`}>Teknologi</Link>
        <Link href="/blog?cat=p5" className={`${styles.categoryItem} ${styles.p5}`}>P5</Link>
        <Link href="/blog?cat=lomba" className={`${styles.categoryItem} ${styles.lomba}`}>Lomba</Link>
      </div>
  )
}

export default MenuCategories