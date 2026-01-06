import React from 'react'
import styles from './Nav2.module.css'
// import { GrFormNextLink } from "react-icons/gr";
// import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Nav2 = () => {
 const navigate =  useNavigate()
  return (
    <div className={styles.nav2}>
    <button onClick={()=>{
        navigate(-1) 
    }} className={styles.back}>Back</button>
    </div>
  )
}

export default Nav2

 
