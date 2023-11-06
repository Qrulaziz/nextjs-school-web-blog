"use client"

import React, { useEffect, useState } from 'react'
import styles from "./writePage.module.css"
import Image from 'next/image'
import "react-quill/dist/quill.bubble.css"
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/utils/firebase'
import dynamic from 'next/dynamic'

const storage = getStorage(app);

const Write = () => {
  const {status} = useSession()
  const ReactQuill = dynamic(() => import('react-quill'), {ssr: false});

  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [file, setFile] = useState(null)
  const [media, setMedia] = useState("")
  const [value, setValue] = useState("")
  const [title, setTitle] = useState("")

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime + file.name
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
          // Handle unsuccessful uploads
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    }
    file && upload()
  }, [file])

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>
  }
  if (status === "unauthenticated") {
    router.push("/")
  }

  const slugify = (str) => 
    str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+/g, "");
  

  const handleSubmit = async () => {
    const res = await fetch("https://smp4-dongko.vercel.app/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: "pendidikan",
      })
    })

    console.log(res)
  }

  return (
    <div className={styles.container}>
      <input type="text" placeholder='Judul' className={styles.input} onChange={e => setTitle(e.target.value)}/>
      {/* <input type="text" placeholder="kategori" /> */}
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && <div className={styles.add}>
          <input type="file" id="image"onChange={e => setFile(e.target.files[0])} style={{display: "none"}}/>
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
          <button className={styles.addButton}>
            <Image src="/external.png" alt="" width={16} height={16} />
          </button>
          <button className={styles.addButton}>
            <Image src="/video.png" alt="" width={16} height={16} />
          </button>
        </div>}
        <ReactQuill className={styles.textArea} theme="bubble" value={value} onChange={setValue} placeholder="Tuliskan beritamu..." />
      </div>
      <button className={styles.posting} onClick={handleSubmit}>Posting</button>
    </div>
  )
}

export default Write
