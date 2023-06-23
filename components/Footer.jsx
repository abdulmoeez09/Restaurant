import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'

export const Footer = () => {
  return (
    <div className={styles.container}>
<div className={styles.item}>
        <Image src='/img/bg.png' alt='' layout='fill' />
      </div>
      <div className={styles.item}>
      <div className={styles.card}>
        <h3 className={styles.motto}>
          OH YEAH,WE DID.PIZZA SHOP, WELL BAKED SLICE OF PIZZA.
        </h3>
      </div>
      <div className={styles.card}>
        <h2 className={styles.title}>FIND OUR RESTAURANTS</h2>
        <p className={styles.text}>
          1654 R - AL BARSHA #304
          <br />DUBAI,UAE
          <br />(012) 345 678
        </p>
        <p className={styles.text}>
          1014 R - AL RAHA #2884
          <br />ABU DHABI,UAE
          <br />(012) 345 678
        </p>
        <p className={styles.text}>
          1877 R - AL NAHDA #140
          <br />SHARJAH,UAE
          <br />(012) 345 678
        </p>
        <p className={styles.text}>
          2012 R - AL BUTEEN #577
          <br />AJMAN,UAE
          <br />(012) 345 678
        </p>
      </div>
      <div className={styles.card}>
        <h2 className={styles.title}>WORKING HOURS!</h2>
        <p className={styles.text}>
          MONDAY UNTIL FRIDAY
         <br /> 9.00 - 22.00
        </p>
        <p className={styles.text}>
          SATURDAY - SUNDAY
         <br /> 12.00 - 24.00
        </p>
      </div>
    </div>
    </div>
       )
}
