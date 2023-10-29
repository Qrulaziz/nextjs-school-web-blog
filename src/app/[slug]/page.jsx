import React from 'react'
import styles from "./singlePage.module.css"
import Menu from '@/components/Menu/Menu'
import Image from 'next/image'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar}/>
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Sahrul Aziz</span>
              <span className={styles.date}>01.11.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cupiditate distinctio natus itaque aliquid eveniet. Quisquam, nemo, velit expedita perferendis ut nulla, amet veritatis veniam numquam dolor eaque facere ratione?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cupiditate distinctio natus itaque aliquid eveniet. Quisquam, nemo, velit expedita perferendis ut nulla, amet veritatis veniam numquam dolor eaque facere ratione?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cupiditate distinctio natus itaque aliquid eveniet. Quisquam, nemo, velit expedita perferendis ut nulla, amet veritatis veniam numquam dolor eaque facere ratione?</p>

          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage