"use client"

import React, { useState } from 'react'
import styles from "./comment.module.css"
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'

const fetcher = async (url) => {
    const res = await fetch(url)

    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message);
        throw error;
    }

    return data;
}

const Comments = ({postSlug}) => {

  const {status} = useSession()
  
  const {data, mutate, isLoading} = useSWR(`https://smp4-dongko.vercel.app/api/comments?postSlug=${postSlug}`, fetcher)

  const [desc, setDesc] = useState("")

  const handleSubmit = async () => {
    await fetch("https://smp4-dongko.vercel.app/api/comments", {
        method: "POST",
        body: JSON.stringify({desc, postSlug})
    });
    mutate();
  }
  
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Komentar</h1>
        {status === "authenticated" ? (<div className={styles.write}>
            <textarea placeholder='Tulis komentar...' className={styles.textInput} onChange={e => setDesc(e.target.value)}/>
            <button className={styles.button} onClick={handleSubmit}>Kirim</button>
        </div>) : (<Link href="/login">Login untuk menulis komentar</Link>)}
        <div className={styles.comments}>
            {isLoading ? "loading" : data?.map(item => (
                 <div className={styles.comment} key={item._id}>
                 <div className={styles.user}>
                     {item?.user?.image && <Image src={item.user.image} alt="" width={50} height={50} className={styles.image} />}
                     <div className={styles.userInfo}>
                         <span className={styles.username}>{item.user.name}</span>
                         <span className={styles.date}>{item.createdAt.substring(0, 10)}</span>
                     </div>
                 </div>
                 <p className={styles.desc}>{item.desc}</p>
             </div>
            ))}
        </div>
    </div>
  )
}

export default Comments