import React from 'react';
import styles from './pagination.module.css';

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Sebelumnya</button>
      <button className={styles.button}>Selanjutnya</button>
    </div>
  )
}

export default Pagination