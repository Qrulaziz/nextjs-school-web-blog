import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Selamat datang!</b> Mari berkeliling dan menelusuri lingkungan sekolah SMPN 4 Dongko</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam animi, vero molestias enim nihil labore eum eveniet. Ab, quisquam ipsum nisi eaque error explicabo, obcaecati, voluptatum minima quibusdam nemo nam!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quidem accusamus, odio quibusdam totam possimus illo fuga labore ex sequi. Harum distinctio doloremque enim nobis quaerat. Consequatur vitae laborum est.
          </p>
          <button className={styles.button}>Lihat selengkapnya</button>
        </div>
      </div>
    </div>
  )
}

export default Featured