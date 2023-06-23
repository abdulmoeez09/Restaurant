import React from 'react'
import styles from '../styles/OrderDetails.module.css'
import {useState} from 'react'

const OrderDetails = ({total , createOrder}) => {
    const [customer,setCustomer] =useState('')
    const [address,setAddress] =useState('')

    const handleClick = ()=>{
    createOrder({customer , address , total , method:0})
    }
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>You will pay $12 on Delivery</h1>
            <div className={styles.item}>
                <lable className={styles.lable}>Name Surname:</lable>
                <input type='text' className={styles.input} placeholder='Abdul Moeez' 
                onChange={(e)=>setCustomer(e.target.value)}/>
                 </div>
                 <div className={styles.item}>
                <lable className={styles.lable}>Address:</lable>
                <textarea rows={5} type='text' className={styles.textarea} placeholder='New Al Falah Street,Al mouri...?' 
                onChange={(e)=>setAddress(e.target.value)}/>
                 </div>
                 <div className={styles.item}>
                <lable className={styles.lable}>Phone Number:</lable>
                <input type='text' className={styles.input} placeholder='+12 3456 789' />
                 </div>
                <button className={styles.button} onClick={handleClick}>Order</button>
        </div>
    </div>
  )
}

export default OrderDetails