import React from 'react'
import styles from '../styles/PizzaCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

export const PizzaCard = ({pizza}) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`}><Image src={pizza.img} alt='' width='500' height='500'/></Link>
    
    <h1 className={styles.title}>{pizza.title}</h1>
    <span className={styles.price}>{pizza.price}</span>
    <p className={styles.Desc}>{pizza.desc}</p>
    </div>
  )
}
