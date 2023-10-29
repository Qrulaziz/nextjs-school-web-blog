import React from 'react';
import styles from './menu.module.css';
import MenuPosts from '../menuPosts/MenuPosts';
import MenuCategories from '../menuCategories/MenuCategories';

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Berita populer</h1>
      <MenuPosts withImage={false} />

      <h2 className={styles.subtitle}>Cari dari topik</h2>
      <h1 className={styles.title}>Kategori</h1>
      <MenuCategories />

      <h2 className={styles.subtitle}>Dipilih oleh editor</h2>
      <h1 className={styles.title}>Pilihan Editor</h1>
      <MenuPosts withImage={true} />
    </div>
  )
}

export default Menu