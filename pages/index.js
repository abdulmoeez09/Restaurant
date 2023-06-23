import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { Featured } from '../components/Featured'
import { PizzaList } from '../components/PizzaList'
import styles from '../styles/Home.module.css'



export default function Home({pizzalist,admin}) {
  return (
    <div className={styles.container}>
    
      <Head>
        <title>Pizza Shop</title>
        <meta name="description" content="Best Pizza in a Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <span>Hello</span>}
      <PizzaList pizzalist={pizzalist}/>
    </div>
  )
}
export const getServerSideProps = async (ctx)=>{
  const myCookie = ctx.req ?.cookies || "" ;
  let admin = false;
  if(myCookie.token === process.env.TOKEN){
    admin = true;
  }
   const res = await axios.get('http://localhost:3000/api/products')
   return{
    props:{
      pizzalist : res.data,
      admin,
    }
   
   }
}
