import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./menuPosts.module.css"

const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.kurikulum}`}>Kurikulum</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Sahrul Aziz - </span>
              <span className={styles.date}>10.04.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.lomba}`}>Lomba</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Sahrul Aziz - </span>
              <span className={styles.date}>10.04.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.p5}`}>P5</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Sahrul Aziz - </span>
              <span className={styles.date}>10.04.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.ekskul}`}>Ekskul</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Sahrul Aziz - </span>
              <span className={styles.date}>10.04.2023</span>
            </div>
          </div>
        </Link>
      </div>
  )
}

export default MenuPosts