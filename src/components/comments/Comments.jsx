import React from 'react'
import styles from "./comment.module.css"
import Link from 'next/link'
import Image from 'next/image'

const Comments = () => {

  const status = "authenticated"  
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Komentar</h1>
        {status === "authenticated" ? (<div className={styles.write}>
            <textarea placeholder='Tulis komentar...' className={styles.textInput} />
            <button className={styles.button}>Kirim</button>
        </div>) : (<Link href="/login">Login untuk menulis komentar</Link>)}
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Sahrul Aziz</span>
                        <span className={styles.date}>01.11.2023</span>
                    </div>
                </div>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorem, aperiam minima autem excepturi, laudantium quidem, repellendus iusto architecto quod pariatur ab? Nulla at temporibus officiis, enim eius nesciunt perferendis.</p>
            </div>

            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Sahrul Aziz</span>
                        <span className={styles.date}>01.11.2023</span>
                    </div>
                </div>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorem, aperiam minima autem excepturi, laudantium quidem, repellendus iusto architecto quod pariatur ab? Nulla at temporibus officiis, enim eius nesciunt perferendis.</p>
            </div>

            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Sahrul Aziz</span>
                        <span className={styles.date}>01.11.2023</span>
                    </div>
                </div>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorem, aperiam minima autem excepturi, laudantium quidem, repellendus iusto architecto quod pariatur ab? Nulla at temporibus officiis, enim eius nesciunt perferendis.</p>
            </div>
        </div>
    </div>
  )
}

export default Comments