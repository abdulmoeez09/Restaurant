import React from 'react'
import styles from '../styles/PizzaList.module.css'
import { PizzaCard } from '../components/PizzaCard'

export const PizzaList = ({pizzalist}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Best Pizza in the Town!</h1>
        <p className={styles.Desc}>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
         <div className={styles.wrapper}>
          {pizzalist.map((pizza)=>(
            <PizzaCard key={pizza._id} pizza={pizza}/>
          ))}
      
       
         </div>
       
    </div>
  )
}
