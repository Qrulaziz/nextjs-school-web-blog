"use client"

import React, { useState } from 'react'
import styles from "./authLinks.module.css"
import Link from 'next/link'

const AuthLinks = () => {

  const [open, setOpen] = useState(false);

  const status = "authenticated"
  return <>
  {status === "notauthenticated" ? (
    <Link href="/login" className={styles.link}>Login</Link>
  ) : (
    <>
      <Link href="/write" className={styles.link}>Tulis</Link>
      <span className={styles.link}>Logout</span>
    </>
  )}
  <div className={styles.burger} onClick={() => {
    setOpen(!open);
  }}>
    <div className={styles.line}></div>
    <div className={styles.line}></div>
    <div className={styles.line}></div>
  </div>
  {open && (
    <div className={styles.responsiveMenu}>
      <Link href="/">BERANDA</Link>
      <Link href="/">PROFIL</Link>
      <Link href="/">BERITA</Link>
      <Link href="/">KONTAK</Link>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
        ) : (
        <>
          <Link href="/write">Tulis</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </div>
  )}
  </>
  
}

export default AuthLinks