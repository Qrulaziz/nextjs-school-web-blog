import React from 'react'
import styles from "./loginPage.module.css"

const LoginPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton}>Masuk dengan Google</div>
            <div className={styles.socialButton}>Masuk dengan Facebook</div>
        </div>
    </div>
  )
}

export default LoginPage