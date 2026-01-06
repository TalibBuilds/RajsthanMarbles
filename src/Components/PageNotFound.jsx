import React from 'react'
import styles from './PageNotFound.module.css'
import Nav2 from '../Nav2';

const PageNotFound = () => {
  return (
    <div class={styles.main}>
    <div class={styles.container}>
    <h1>404</h1>
    <h2>Oops, Page Not Found</h2>
    <p>Page that you're looking for isn't found</p>
    <Nav2 />
  </div>
  </div>
  )
}

export default PageNotFound
