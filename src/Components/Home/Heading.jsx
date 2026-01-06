import React from 'react'
import styles from './Heading.module.css'

const Heading = ({heading,paragraph}) => {
  return (
    <div className={styles.heading}>
        <h1>{heading}</h1>
        <p>{paragraph}</p>
    </div>
  )
}

export default Heading